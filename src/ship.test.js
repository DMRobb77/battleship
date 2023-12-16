import Ship from "./ship";
import Gameboard from "./gameboard";
import Player from "./player";

const testCruiser = new Ship('Cruiser');
const testBoard = new Gameboard();


describe('Populating the board with legally placed ships', () => {
    beforeAll(() => {
        testBoard.place(testCruiser, 'D3', 'North');

        const testCarrier = new Ship('Carrier');
        testBoard.place(testCarrier, 'H5', 'North');

        const testSub = new Ship('Submarine');
        testBoard.place(testSub, 'B7', 'East');
    });

    test('Internal gameboard methods, delete this later', () => {
        expect(testBoard.remainingShips[0].locations).toStrictEqual([[ 4, 3 ], [ 3, 3 ], [ 2, 3 ]]);
    });

    test('Receive a false statement if the ship goes off the board', () => {
        expect(testBoard.place(new Ship('Carrier'), 'A1', 'West')).toBeFalsy();
    })

    test('Recive a false if the ship overlaps another one.', () => {
        expect(testBoard.place(new Ship('Carrier'), 'G4', 'East')).toBeFalsy();
    })

    test('Receive notification that a ship has been hit', () => {
        expect(testBoard.receiveAttack('B3')).toBeTruthy();
    })

    test('Receive notification of a miss', () => {
        expect(testBoard.receiveAttack('J10')).toBeFalsy();
    })

    test('Check if misses are appropriately logged', () => {
        expect(testBoard.missesReceived).toStrictEqual([[10, 10]]);
    })

    test('Receive an invalid attack warning when attacking an invalid space', () => {
        expect(testBoard.receiveAttack('B3')).toBe('Invalid attack');
    })

    describe('Checking attacks and sinking', () => {
        beforeAll(() => {
            testBoard.receiveAttack('D3');
            testBoard.receiveAttack('C3');
        });

        test('Did the Cruiser sink?', () => {
            expect(testBoard.destroyedShips[0].name).toBe('Cruiser');
        })

        test('Was the Cruiser removed from the list of remaining ships?', () => {
            expect(testBoard.remainingShips).not.toContain(      {
                "id": 0,
                "ship": {
                  "name": "Cruiser",
                  "hits": 3,
                  "sinkStatus": true,
                  "length": 3
                },
                "locations": [
                  [
                    4,
                    3
                  ],
                  [
                    3,
                    3
                  ],
                  [
                    2,
                    3
                  ]
                ]
              });
        })
    })

    describe('Checking endgame, all ships sunk', () => {
        beforeAll(() => {
            testBoard.receiveAttack('H5');
            testBoard.receiveAttack('G5');
            testBoard.receiveAttack('F5');
            testBoard.receiveAttack('E5');
            testBoard.receiveAttack('D5');

            testBoard.receiveAttack('B7');
            testBoard.receiveAttack('B8');
            testBoard.receiveAttack('B9');
        })

        test('Does the list of remaining ships empty out and the list of destroyed ships fill?', () => {
            expect(testBoard.remainingShips.length).toBe(0);
            expect(testBoard.destroyedShips.length).toBe(3);
            expect(testBoard.boardCleared).toBeTruthy();
        })
    })
})


describe('Setting up a real game with players', () => {

    const player1Board = new Gameboard();
    const player2Board = new Gameboard();

    const player1 = new Player('Player 1', true, true, player1Board);
    const player2 = new Player('Player 2', true, true, player2Board);


    beforeAll(() => {

        player1.opponent = player2;
        player2.opponent = player1;

    })
    

    test('Do we succesfully create two players and assign them as opponents?', () => {
        expect(player1.opponent).toBe(player2);
        expect(player2.opponent).toBe(player1);
    })

    test('Do we succesfully start the players with a full inventory of ships?', () => {
        expect(player1.startingInventory.carrier.name).toBe('Carrier');
        expect(player2.startingInventory.destroyer.name).toBe('Destroyer');
    })

    test(`Can we succesfully place ships on the board?`, () => {
        expect(player1.gameboard.place(player1.startingInventory.carrier, 'G1', 'North')).toBeTruthy();
        expect(player1.gameboard.place(player1.startingInventory.cruiser, 'C4', 'East')).toBeTruthy();
        expect(player1.gameboard.place(player1.startingInventory.destroyer, 'H1', 'North')).toBeFalsy();
        expect(player2.gameboard.place(player2.startingInventory.submarine, 'F4', 'West')).toBeTruthy();
        expect(player2.gameboard.place(player2.startingInventory.destroyer, 'J10', 'North')).toBeTruthy();
    })

    test(`Can players succesfully send shots to each other?`, () => {
        expect(player1.sendAttack('F4')).toBeTruthy();
    })

    test('Did the attack hit?', () => {
        expect(player2.gameboard.hitsReceived).toStrictEqual([[6, 4]]);
    })

    test('Get the name of a ship we destroy', () => {
        player1.sendAttack('F3');
        expect(player1.sendAttack('F2')).toBe('Submarine');
    })

    test('Receive notification of victory', () => {
        player1.sendAttack('J10');
        expect(player1.sendAttack('I10')).toBe('You win!');
    })


    describe('Receiving real moves from an AI', () => {

        test(`Does an AI player return random legal moves by default?`, () => {
            player2.sendAttack('C3');
            expect(player2.generateAttack()).toBeDefined();
        })

        test('After landing a succesful hit, does AI player try to follow up?', () => {

            expect(player2.sendAttack('C4')).toBeTruthy();
            expect(player2.sendAttack('C5')).toBeTruthy();
            expect(player2.lastTwoMovesHit).toBeTruthy();
            expect(player2.generateAttack()).toBeDefined();
            expect(player2.generateAttack()).toBeDefined();

        })
    })

})


describe('Setting up a fully AI game', () => {

    const player1Board = new Gameboard();
    const player2Board = new Gameboard();

    const player1 = new Player('Player 1', true, true, player1Board);
    const player2 = new Player('Player 2', true, true, player2Board);


    beforeAll(() => {

        player1.opponent = player2;
        player2.opponent = player1;

        player2.randomlyPopulateBoardWithShips();
    })

    test('Was the board populated correctly?', () => {
        expect(player1.gameboard.place(player1.startingInventory.carrier, 'G1', 'North')).toBeTruthy();
        expect(player2.gameboard.remainingShips).toBeDefined();
        console.log(JSON.stringify(player2.gameboard.remainingShips));
    })


    test('Can the AI win a game?', () => {
        player1.generateAttack();
        player1.generateAttack();
        player1.generateAttack();

    })
})