class Gameboard {
    constructor(){
        this.missesReceived = [];
        this.remainingShips = [];
    }

    place(ship, bowLocation, orientation) {
        const placement = this.checkPlacementAvailable(bowLocation, orientation, ship.length);
        if (placement){
            this.remainingShips.push({ship, locations: placement});
        } else {
            console.log('Ship cannot legally be placed here.');
            return false;
        }
        return this.remainingShips;
    }

    checkPlacementAvailable(start, orientation, length) {
        const invalidPlacement = false;
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

        // Check if this placement would extend off of the board

        for (let j = 0; j < length; j += 1){
            if (proposedPlacement[j][0] <= 0 || proposedPlacement[j][0] > 10){
                return invalidPlacement;
            } 
            
            if (proposedPlacement[j][1] <= 0 || proposedPlacement[j][1] > 10){
                return invalidPlacement;
            };
        }

        // Check if this placement would collide with any other placed ships




        function checkForCollision(placement, remainingShips) {
            for (let i = 0; i < remainingShips.length; i++) {
              const ship = remainingShips[i];
          
              for (let j = 0; j < placement.length; j++) {
                const proposedCoordinate = placement[j];
          
                // Check if the proposedCoordinate matches any location in the ship
                const found = ship.locations.some(
                  (location) => location[0] === proposedCoordinate[0] && location[1] === proposedCoordinate[1]
                );
          
                if (found) {
                  console.log('Collision detected!');
                  return true; // Collision detected, return true
                }
              }
            }
          
            // No collision detected, return false
            return false;
          }
          
          const collisionDetected = checkForCollision(proposedPlacement, this.remainingShips);
          
          if (collisionDetected) {
            console.log('There is a collision!');
            return invalidPlacement;
          } 
            console.log('No collision detected.');
          
          




        return proposedPlacement;
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