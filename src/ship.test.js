import Ship from "./ship";
import Gameboard from "./gameboard";

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
        })


    })


})





