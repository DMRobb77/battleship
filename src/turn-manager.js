import Player from './player';
import Gameboard from './gameboard';

class TurnManager {
    constructor(gui){
        this.gui = gui;
        this.player = undefined;
        this.cpu = undefined;
        this.playerShipsPlaced = 0;
    }

    setupBoard(){
        const playerBoard = new Gameboard();
        const cpuBoard = new Gameboard();
        this.player = new Player('Player', true, true, playerBoard);
        this.cpu = new Player('CPU', false, false, cpuBoard);

        this.player.opponent = this.cpu;
        this.cpu.opponent = this.player;

        this.generateCpuShips();
    }
    
    placeUserShip(name, location, orientation){
        console.log(`Over here at ${[name, location, orientation]}`);
        const ship = this.player.startingInventory[name];

        const placement = this.player.gameboard.place(ship, location, orientation);
        if (!placement){
            // This placement isn't legal
            return false;
        }

        this.gui.placeShips(this.player.gameboard.remainingShips, 'player');

        this.playerShipsPlaced += 1;
        if (this.playerShipsPlaced === 5){
            this.allUserShipsPlaced();
        }

        return true;
    }

    generateCpuShips(){
        this.cpu.randomlyPopulateBoardWithShips();
        this.gui.placeShips(this.cpu.gameboard.remainingShips, 'opponent');
    }

    allUserShipsPlaced(){
        this.gui.beginGame();
        this.gui.currentPhase.setup = false;
        this.gui.currentPhase.playerTurn = true;
    }

    playerMove(coord){
        console.log(coord);

        const attack = this.player.sendAttack(coord);

        // We destroyed a ship
        if (typeof attack.hitStatus === 'string' && attack.hitStatus !== 'Invalid attack'){
            this.gui.alertShipDestroyed(attack.hitStatus, 'player');
        }
    }

    cpuMove(){
        if (!this.gui.currentPhase.over){
            const attack = this.cpu.generateAttack()
            const gridSquare = attack.targetLocation;
            this.gui.attackPlayerSquare(gridSquare);
    
            // We destroyed a ship
            if (typeof attack.hitStatus === 'string' && attack.hitStatus !== 'Invalid attack'){
                this.gui.alertShipDestroyed(attack.hitStatus, 'cpu');
            }
    
            this.gui.currentPhase.cpuTurn = false;
            this.gui.currentPhase.playerTurn = true;
        }
    }

}


export default TurnManager;