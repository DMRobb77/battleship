import Ship from "./ship";

class Player {
    constructor(name, isHuman, hasCurrentTurn, gameboard){
        this.name = name;
        this.isHuman = isHuman;
        this.hasCurrentTurn = hasCurrentTurn;
        this.gameboard = gameboard;
        this.opponent = undefined;
    this.startingInventory = {
            carrier: new Ship('Carrier'),
            battleship: new Ship('Battleship'),
            cruiser: new Ship('Cruiser'),
            submarine: new Ship('Submarine'),
            destroyer: new Ship('Destroyer')
        }
    }

    receiveAttack(targetLocation){
        return this.gameboard.receiveAttack(targetLocation);
    }

    sendAttack(targetLocation){
        this.opponent.receiveAttack(targetLocation);
    }

}


export default Player;