class Gameboard {
    constructor(){
        this.missesReceived = [];
        this.remainingShips = [];
    }

    place(ship, bowLocation, orientation) {
        this.checkPlacementAvailable(bowLocation, orientation, ship.length);


    }

    checkPlacementAvailable(start, orientation, length) {
        const convertedStart = this.convertLocationFromString(start);
        const proposedPlacement = [];
        proposedPlacement.push(convertedStart);

        for (let i = 1; i < length; i += 1){
            switch (orientation) {
                case 'North':
                    proposedPlacement.push(
                        [convertedStart[0] - i, convertedStart[1]]);
                    break;
                case 'East':
                    proposedPlacement.push(
                        [convertedStart[0], convertedStart[1] + i]);
                    break;
                case 'South':
                    proposedPlacement.push(
                    [convertedStart[0] + i, convertedStart[1]]);
                    break;
                case 'West':
                    proposedPlacement.push(
                        [convertedStart[0], convertedStart[1] - i]);
                    break;
                default:
            }
        }


        console.log(proposedPlacement);

    }

    convertLocationFromString(loc){

        const letterToNumber = {
            A: 1,
            B: 2,
            C: 3,
            D: 4,
            E: 5,
            F: 6,
            G: 7,
            H: 8,
            I: 9,
            J: 10
        };

        return [letterToNumber[loc[0]], parseInt(loc[1], 10)];
    }


    receiveAttack(location) {

    }


}


export default Gameboard;