import Ship from "./ship";
import Gameboard from "./gameboard";

const testCruiser = new Ship('Cruiser');

test('Initialize a Cruiser with a length of 3.', () => {
    expect(testCruiser).toEqual({
        name: 'Cruiser',
        length: 3,
        hits: 0,
        sinkStatus: false
    });
});


describe('Checking ship hit registration', () => {
    beforeAll(() => {
        testCruiser.hit();
    });
    
    test('Do hits register?', () => {
        expect(testCruiser.hits).toBe(1);
    });
});

describe('Checking ships sinkable', () => {
    beforeAll(() => {
        testCruiser.hit();
        testCruiser.hit();
    });

    test('Does the ship sink?', () => {
        expect(testCruiser.sinkStatus).toBe(true);
    })
});



const testBoard = new Gameboard();


describe('Populating the board with legally placed ships', () => {
    beforeAll(() => {
        testBoard.place(testCruiser, 'D3', 'North');

        const testCarrier = new Ship('Carrier');
        testBoard.place(testCarrier, 'H5', 'North');

        const testSub = new Ship('Submarine');
        testBoard.place(testSub, 'B7', 'East');

        // testBoard.receiveAttack(['B', 6]);
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

})




