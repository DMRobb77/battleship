class Gameboard {
    constructor(){
        this.missesReceived = [];
        this.hitsReceived = [];
        this.remainingShips = [];
        this.destroyedShips = [];
        this.currentShipId = 0;
        this.boardCleared = false;
    }

    place(ship, bowLocation, orientation) {
        const placement = this.checkPlacementAvailable(bowLocation, orientation, ship.length);
        
        if (placement){

            ship.id = this.currentShipId;
            ship.locations = placement;
            this.remainingShips.push(ship);
            this.currentShipId += 1;

        } else {

            return false; // Ship cannot be legally placed here, return false

        }

        return this.remainingShips;
    }

    checkForCollision(placement, remainingShips) {

        // Check if the proposed placement would collide with placed ships

        for (let i = 0; i < remainingShips.length; i += 1) {
            const existingShip = remainingShips[i];

            for (let j = 0; j < placement.length; j += 1) {
                const proposedCoordinate = placement[j];
                const found = existingShip.locations.some(
                    (location) => 
                    location[0] === proposedCoordinate[0] && 
                    location[1] === proposedCoordinate[1]
                );
        
                if (found) {

                    return true; // Collision detected, return true

                }
            }
        }
      
        return false;   // No collision detected, return false
    }

    checkPlacementAvailable(start, orientation, length) {
        const invalidPlacement = false;
        const convertedStart = this.convertLocationFromString(start);
        const proposedPlacement = [convertedStart];

        console.log(`Placing at ${start} with orientation ${orientation} for a ship of length ${length}`);

        const coordinateChanges = {
            North: [-1, 0],
            East: [0, 1],
            South: [1, 0],
            West: [0, -1],
        };

        for (let i = 1; i < length; i += 1) {
            const [rowChange, colChange] = coordinateChanges[orientation];
            proposedPlacement.push([convertedStart[0] + i * rowChange, convertedStart[1] + i * colChange]);
        }

        if (this.isPlacementOffBoard(proposedPlacement, length)) {
            return invalidPlacement;
        }

        if (this.checkForCollision(proposedPlacement, this.remainingShips)) {
            return invalidPlacement;
        }

        return proposedPlacement;
    }
    
    isPlacementOffBoard(placement, length) {
        const boardSize = 10;

        for (let j = 0; j < length; j += 1) {
            const [row, col] = placement[j];
            if (row <= 0 || row > boardSize || col <= 0 || col > boardSize) {
            return true;
            }
        }

        return false;
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

        const convertedLocation = [
            letterToNumber[loc[0]],
            parseInt(loc.slice(1), 10)
          ];

        return convertedLocation;
    }

    recordMissedAttack(miss){
        this.missesReceived.push(miss);
    }

    checkAttackPreexisting(hit) {
        // Returns true if this attack has already occured
        const allAttacks = this.missesReceived.concat(this.hitsReceived);

        const found = allAttacks.some(innerArray => 
            innerArray[0] === hit[0] && innerArray[1] === hit[1]
          );

        return found;
    }

    checkAttackHitShip(hitLoc, remainingShips){
        // Search the list of remaining ship locations to see if it matches
        for (let i = 0; i < remainingShips.length; i += 1) {
            const ship = remainingShips[i];
            const found = ship.locations.some(
              (location) => location[0] === hitLoc[0] && location[1] === hitLoc[1]
            );
            if (found) {
                const struckShip = remainingShips[i];
                struckShip.hit();
                this.hitsReceived.push(hitLoc);
                if (struckShip.sinkStatus){ 
                    return this.shipDestroyed(struckShip);
                }; 
                return true;
            }
        }
        // No hit detected, return false
        this.recordMissedAttack(hitLoc);
        return false;
    }


    receiveAttack(hit) {
        const convertedHit = this.convertLocationFromString(hit);
        if (this.checkAttackPreexisting(convertedHit)) {
            // If this attack has already occured, render it invalid
            return 'Invalid attack';
        }

        return  this.checkAttackHitShip(convertedHit, this.remainingShips);
    }

    shipDestroyed(destroyedShip){
        this.destroyedShips.push(destroyedShip);
        const indexToRemove = this.remainingShips
            .findIndex(ship => ship.id === destroyedShip.id);
        this.remainingShips.splice(indexToRemove, 1);
        this.checkBoardCleared()
        return this.boardCleared ? 'You win!' : destroyedShip.name;
    }

    checkBoardCleared(){
        if (this.remainingShips.length === 0){
            this.boardCleared = true;
        }
    }
}

export default Gameboard;