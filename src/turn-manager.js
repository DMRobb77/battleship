import Player from './player';
import Gameboard from './gameboard';

class TurnManager {
    constructor(gui){
        this.gui = gui;
        this.player = undefined;
        this.cpu = undefined;
    }

    setupGame(){
        const playerBoard = new Gameboard();
        const cpuBoard = new Gameboard();
        this.player = new Player('Player', true, true, playerBoard);
        this.cpu = new Player('CPU', false, false, cpuBoard);

        this.player.opponent = this.cpu;
        this.cpu.opponent = this.player;

        this.player.randomlyPopulateBoardWithShips();
        this.gui.placeShips(this.player.gameboard.remainingShips, 'player');
        this.cpu.randomlyPopulateBoardWithShips();
        this.gui.placeShips(this.cpu.gameboard.remainingShips, 'opponent');
    }

}


export default TurnManager;