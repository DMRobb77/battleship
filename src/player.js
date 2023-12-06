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
        } else {
            return hitStatus;
        }

        this.removeAttackFromLegalList(targetLocation);

        return hitStatus;
    }

    removeAttackFromLegalList(attack){

        const targetIndex = this.legalAttacks.indexOf(attack);

        this.legalAttacks.splice(targetIndex, 1);
    }

    generateRandomLegalAttack(){
        const attackIndex = Math.floor(Math.random() * this.legalAttacks.length);

        return this.legalAttacks[attackIndex];
    }

    generateRandomFollowupAttack(){
        const north = String.fromCharCode(this.lastRandomAttack.charCodeAt(0) - 1)
            + this.lastRandomAttack[1];

        const south = String.fromCharCode(this.lastRandomAttack.charCodeAt(0) + 1)
        + this.lastRandomAttack[1];

        const east = this.lastRandomAttack[0] + (this.lastRandomAttack[1] - 1);

        const west = this.lastRandomAttack[0] + (parseInt(this.lastRandomAttack[1], 10) + 1);

        const followupMoves = [north, south, east, west];

        for (let i = 0; i < 4; i +=1 ){
            if (this.legalAttacks.indexOf(followupMoves[i]) < 0){
                followupMoves.splice(i, 1);
            }
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
            return attack;
        }

        if (oneAttackBack[0].charCodeAt(0) < twoAttacksBack.charCodeAt(0)){
            attack = String.fromCharCode(oneAttackBack.charCodeAt(0) -1) 
                + oneAttackBack[1];
            return attack;
        }

        if (oneAttackBack[1] > twoAttacksBack[1]){
            attack = oneAttackBack[0] + (parseInt(oneAttackBack[1], 10) + 1);
            return attack;
        }

        if (oneAttackBack[1] < twoAttacksBack[1]){
            attack = oneAttackBack[0] + (parseInt(oneAttackBack[1], 10) - 1);
            return attack;
        }
    }

    generateDoubleBackAttack(){
        const firstAttack = this.deliberateAttacks[0];

        if (firstAttack[0] === this.deliberateAttacks[this.deliberateAttacks.length - 1][0]){
            const option1 = firstAttack[0] + (parseInt(firstAttack[1], 10) + 1);
            const option2 = firstAttack[0] + (parseInt(firstAttack[1], 10) + 1);
            console.log(`We're on the same horizontal, our options are ${option1} and
                ${option2}`);
        };

        if (firstAttack[1] === this.deliberateAttacks[this.deliberateAttacks.length - 1][1]){
            console.log(`We're on the same vertical`);
        };

        return 'A1';
    }

    generateAttack(){
        let attack;

        // If a ship has already been struck, pursue sinking it

        if (this.pursuingHitShip && !this.lastTwoMovesHit){
            if (this.deliberateAttacks.length >= 2){
                attack = this.generateDoubleBackAttack();
                console.log(`Doubling back to ${attack}`);
            } else {
                attack = this.generateRandomFollowupAttack();
            }

            console.log(`The followup move is ${attack}`);

        } else if (this.pursuingHitShip && this.lastTwoMovesHit){

            attack = this.generateDeliberateFollowupAttack();

            console.log(`The last two attacks are ${this.deliberateAttacks},
                meaning the followup is ${attack}`);

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