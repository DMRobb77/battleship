import Ship from "./ship";
import Gameboard from "./gameboard";

const testCruiser = new Ship('Cruiser');
const testBoard = new Gameboard();

testBoard.place(testCruiser, 'D3', 'North');

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


