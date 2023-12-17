import GUIManager from "./GUI-manager";
import Ship from "./ship";

class Player {
    constructor(name, isHuman, hasCurrentTurn, gameboard){
        this.name = name;
        this.isHuman = isHuman;
        this.hasCurrentTurn = hasCurrentTurn;
        this.gameboard = gameboard;
        this.opponent = undefined;
        this.pursuingHitShip = false;
        this.lastTwoMovesHit = false;
        this.lastRandomAttack = undefined;
        this.deliberateAttacks = [];
        this.startingInventory = {
                carrier: new Ship('Carrier'),
                battleship: new Ship('Battleship'),
                cruiser: new Ship('Cruiser'),
                submarine: new Ship('Submarine'),
                destroyer: new Ship('Destroyer')
            }
        this.legalAttacks = this.generateAllLegalAttacks();
    }

    generateAllLegalAttacks(){
        const moves = [];

        for (let i = 0; i <= 9; i += 1){
            for (let j = 1; j <= 10; j += 1){
                moves.push(String.fromCharCode(i + 65) + j);
            }
        }

        return moves;
    }

    youWin(){
        console.log('WINNER!');
    }

    youLose(){
        console.log('We lose');
    }

    destroyedEnemyShip(ship){
        console.log(`We destroyed a ${ship}`);
    }

    receiveAttack(targetLocation){

        const hitStatus = this.gameboard.receiveAttack(targetLocation);

        if (hitStatus === 'You win!'){
            this.youLose();
        }

        return hitStatus;
    }

    sendAttack(targetLocation){

        const hitStatus = this.opponent.receiveAttack(targetLocation);

        if (hitStatus === 'You win!'){
            this.youWin();
        } else if (typeof hitStatus === 'string' && hitStatus !== 'Invalid attack'){
            console.log('SHIP HAS BEEN DESTROYED --------')
            this.pursuingHitShip = false;
            this.lastTwoMovesHit = false;
            this.deliberateAttacks = [];
            this.destroyedEnemyShip(hitStatus);
        } else if (hitStatus === true && !this.pursuingHitShip){
            this.pursuingHitShip = true;
            this.deliberateAttacks.push(targetLocation);
        } else if (hitStatus === true && this.pursuingHitShip){
            this.lastTwoMovesHit = true;
            this.deliberateAttacks.push(targetLocation);
        } else if (hitStatus === false){
            this.lastTwoMovesHit = false;
        }

        console.log(`Removing ${targetLocation} from the legal list`);

        this.removeAttackFromLegalList(targetLocation);

        return { hitStatus, targetLocation} ;
    }

    removeAttackFromLegalList(attack){

        const targetIndex = this.legalAttacks.indexOf(attack);

        this.legalAttacks.splice(targetIndex, 1);
    }

    generateRandomLegalAttack(){
        const attackIndex = Math.floor(Math.random() * this.legalAttacks.length);

        return this.legalAttacks[attackIndex];
    }

    generateRandomFollowupAttack(attackCenter){

        const attackCenterCodeNorth = attackCenter.charCodeAt(0) - 1;
        const attackCenterCodeSouth = attackCenter.charCodeAt(0) + 1;

        const north = String.fromCharCode(attackCenterCodeNorth) + attackCenter[1];
        const south = String.fromCharCode(attackCenterCodeSouth) + attackCenter[1];
        const east = attackCenter[0] + (attackCenter[1] - 1);
        const west = attackCenter[0] + (parseInt(attackCenter[1], 10) + 1);

        const followupMoves = [north, south, east, west];

        console.log(`Starting with the followup moves ${JSON.stringify(followupMoves)}`);

        const movesToRemove = [];

        // Remove all illegal options
        for (let i = 0; i < 4; i +=1 ){
            if (this.legalAttacks.indexOf(followupMoves[i]) < 0){
                console.log(`*******Removing ${followupMoves[i]} at index ${i} for fucks sake`);
                movesToRemove.push(followupMoves[i]);
            }
        }

        console.log(`Here's the moves we are removing ${JSON.stringify(movesToRemove)}`);

        if (movesToRemove.length > 0){
            for (let i = 0; i < movesToRemove.length; i += 1){
                const index = followupMoves.indexOf(movesToRemove[i])
                if (index > 0){
                    followupMoves.splice(index, 1);
                }
            }
        }

        console.log(`-- -- -- Picking a followup move from ${JSON.stringify(followupMoves)} -- -- --`);

        if (followupMoves.length === 0){
            return this.generateRandomLegalAttack();
        }
        
        return followupMoves[Math.floor(Math.random() * followupMoves.length)];
    }

    generateDeliberateFollowupAttack(){
        let attack;

        const twoAttacksBack = this.deliberateAttacks[this.deliberateAttacks.length - 2];
        const oneAttackBack = this.deliberateAttacks[this.deliberateAttacks.length - 1];

        if (oneAttackBack[0].charCodeAt(0) > twoAttacksBack.charCodeAt(0)){

            attack = String.fromCharCode(oneAttackBack.charCodeAt(0) + 1) 
                + oneAttackBack[1];

        } else if (oneAttackBack[0].charCodeAt(0) < twoAttacksBack.charCodeAt(0)){

            attack = String.fromCharCode(oneAttackBack.charCodeAt(0) -1) 
                + oneAttackBack[1];

        } else if (oneAttackBack[1] > twoAttacksBack[1]){

            attack = oneAttackBack[0] + (parseInt(oneAttackBack[1], 10) + 1);

        } else if (oneAttackBack[1] < twoAttacksBack[1]){

            attack = oneAttackBack[0] + (parseInt(oneAttackBack[1], 10) - 1);

        }

        return this.legalAttacks.indexOf(attack) > 0 ? 
            attack : 
            this.generateRandomFollowupAttack(this.deliberateAttacks[0]);
    }

    generateAttack(){
        let attack;

        console.log(`The current state of our many bools: Last two moves hit is ${this.lastTwoMovesHit}, Pursuing hit ship is ${this.pursuingHitShip}, and our Deliberate attack is list ${JSON.stringify(this.deliberateAttacks)}, while last random attack was ${this.lastRandomAttack}`);

        // If a ship has already been struck, pursue sinking it

        if (this.pursuingHitShip && !this.lastTwoMovesHit){

            if (this.deliberateAttacks.length >= 2){

                // If a ship has been struck twice, but we just missed,
                // attack in a grid emanating from the first hit

                attack = this.generateRandomFollowupAttack(this.deliberateAttacks[0]);
                console.log(`Doubling back to ${attack}`);

            } else {

                attack = this.generateRandomFollowupAttack(this.lastRandomAttack);

                console.log(`The random followup move is ${attack}`);

            }

        } else if (this.pursuingHitShip && this.lastTwoMovesHit){

            attack = this.generateDeliberateFollowupAttack();
            console.log(`The last two attacks hit, and the moves that have hit are ${this.deliberateAttacks}, meaning the deliberate followup is ${attack}`);

        } else {

            // If a ship has not been struck, attack randomly

            attack = this.generateRandomLegalAttack();
            console.log(`Generating random attack ${attack}`);
            this.lastRandomAttack = attack;

        }

        return this.sendAttack(attack);
    }

    randomlyPopulateBoardWithShips(){
        let placedShips = 4;

        const randomOrientation = () => {
            let orientation;
            switch (Math.floor(1 + Math.random() * 3)) {
                case 1:
                    orientation = 'North';
                    break;
                case 2:
                    orientation = 'South';
                    break;
                case 3:
                    orientation = 'East';
                    break;
                case 4:
                    orientation = 'West';
                    break;
                default:
                    return 'Direction unvailable';
            }
            return orientation;
        }


        while (placedShips >= 0){
            const ship = Object.entries(this.startingInventory)[placedShips][1];

            console.log(`Attempting to place ${JSON.stringify(ship)}`);

            const placement = this.gameboard.place(
                ship,
                this.generateRandomLegalAttack(),
                randomOrientation()
                );
            if (placement !== false){
                placedShips -= 1;
            }
        }
    }

}


export default Player;