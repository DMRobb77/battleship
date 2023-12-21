import './normalize.css';
import './style.css';
import GUIManager from './GUI-manager';
import TurnManager from './turn-manager';
import Player from './player';

const displayManager = new GUIManager();
const turnManager = new TurnManager(displayManager);
displayManager.setTurnManager(turnManager);

displayManager.initialPageSetup();
turnManager.setupBoard();
