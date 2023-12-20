import TurnManager from "./turn-manager";

class GUIManager {
    constructor() {
        this.turnManager = undefined;
        this.currentPhase = {
            setup: true,
            playerTurn: false,
            cpuTurn: false,
            over: false
        };
    }

    setTurnManager(manager){
        this.turnManager = manager;
    }

    generateGridMarker(y,x = null){
        const numberToLetter = {
            0: 'Label',
            1: 'A',
            2: 'B',
            3: 'C',
            4: 'D',
            5: 'E',
            6: 'F',
            7: 'G',
            8: 'H',
            9: 'I',
            10: 'J'
        };

        const convertedLocation = [
            numberToLetter[y],
            x
        ];

        return convertedLocation.join('');
    }

    attackPlayerSquare(square){
        const possibleSquares = document.querySelectorAll(`.${square}`);
        let targetSquare;
        possibleSquares.forEach(possibleSquare => {
            if (possibleSquare.parentNode.classList.contains('player-board')){
                targetSquare = possibleSquare;
            }
        });

        if (targetSquare.classList.contains('ship')){
            targetSquare.classList.remove('ship');
            targetSquare.classList.add('inert');
            targetSquare.classList.add('struck');
        } else {
            targetSquare.classList.add('inert');
            targetSquare.classList.add('miss');
        }
    }

    opponentSquareClicked(square){
        if (this.currentPhase.playerTurn !== true){
            return false;
        } 

            if (square.classList.contains('ship')){
                square.classList.remove('ship');
                square.classList.add('inert');
                square.classList.add('struck');
    
                const gridCoord = Array.from(square.classList);
                this.turnManager.playerMove(gridCoord[0]);
    
            } else {
                square.classList.add('inert');
                square.classList.add('miss');
    
                const gridCoord = Array.from(square.classList);
                this.turnManager.playerMove(gridCoord[0]);
            }
    
            this.currentPhase.playerTurn = false;
            this.currentPhase.cpuTurn = true;
    
            setTimeout(() => {
                this.turnManager.cpuMove();
            }, 1000);
        
    }

    gridSquareClicked(e){
        const clickedSquare = e.target;
        const parentElement = clickedSquare.parentNode;

        if (this.currentPhase.playerTurn){
            if (clickedSquare.classList.contains('label') || 
                clickedSquare.classList.contains('inert')){
                return;
            }

            if (parentElement.classList.contains('opponent-board')){
                this.opponentSquareClicked(clickedSquare);
            } else if (parentElement.classList.contains('player-board')){
                this.playerSquareClicked(clickedSquare);
            }

        }


    }

    generateBoard(parentNode){
        for (let i = 0; i <= 10; i += 1){
            for (let j = 0; j <= 10; j += 1){
                const gridSquare = document.createElement('div');
                gridSquare.classList.add(this.generateGridMarker(i, j));
                gridSquare.classList.add('gridsquare');
                parentNode.appendChild(gridSquare);

                gridSquare.addEventListener('click', (event) =>{
                    this.gridSquareClicked(event);
                });

                if (i < 1 && j !== 0){
                    gridSquare.textContent = j;
                    gridSquare.classList.add('label');
                    gridSquare.classList.remove('gridsquare');
                } else if (i > 0 && j === 0){
                    gridSquare.textContent = this.generateGridMarker(i);
                    gridSquare.classList.add('label');
                    gridSquare.classList.remove('gridsquare');
                } else if (i === 0 && j === 0){
                    gridSquare.classList.add('label');
                    gridSquare.classList.remove('gridsquare');

                }
            }
        }
    }

    gameOver(winner){
        this.currentPhase.cpuTurn = false;
        this.currentPhase.playerTurn = false;
        this.currentPhase.over = true;

        const announcements = document.querySelector('.announcements span');

        if (winner === "player"){
            announcements.innerText = `You win!`;
        } else {
            announcements.innerText = 'You lose!';
        }
    }

    alertShipDestroyed(shipName, owner){
        const announcements = document.querySelector('.announcements span');

        if (shipName === 'You win!'){
            this.gameOver(owner);
        } else if (owner === 'player'){
            announcements.innerText = `You destroyed the enemy ${shipName}!`;
            this.displayEnemyShipDestroyed(shipName);
        } else {
            announcements.innerText = `Your ${shipName} has been destroyed!`;
        }
    }

    displayEnemyShipDestroyed(shipName){
        const destroyedList = document.querySelector('.destroyed-ships');
        const shipDiv = document.createElement('div');
        destroyedList.append(shipDiv);
        shipDiv.classList.add(`destroyed-shipname`);
        
        const shipText = document.createElement('span');
        shipText.innerText = shipName;
        shipDiv.append(shipText);
    }

    initialPageSetup(){
        console.log(`We're setting up the page`);
        const playerBoard = document.querySelector('.gameboards .player-board');
        const opponentBoard = document.querySelector('.gameboards .opponent-board');
        this.generateBoard(playerBoard);
        this.generateBoard(opponentBoard);
        this.shipTraySetup();
    }

    shipTraySetup(){
        const coordInputTextBoxes = document.querySelectorAll('.ship-tray input[type="text"');
        const shipSubmitForms = document.querySelectorAll('.ship-tray form');

        // Set a custom error message on the coordinate inputs
        coordInputTextBoxes.forEach((inputBox) => {
            inputBox.addEventListener('input', () => {
                if (inputBox.validity.patternMismatch){
                    inputBox.setCustomValidity(`Please enter a viable grid coordinate. 
                    Examples: D5, J9, B10`)
                } else {
                    inputBox.setCustomValidity('');
                }
            })
        })

        shipSubmitForms.forEach((form) => {
            console.log(form.parentElement);
            form.addEventListener("submit", (event) => {
                event.preventDefault();
                const ship = form.parentElement.className;

                let noseCoord = form.querySelector('input[type="text"]');
                noseCoord = noseCoord.value;
                noseCoord = noseCoord.charAt(0).toUpperCase() + noseCoord.slice(1);

                let orientation = form.querySelector('select');
                orientation = orientation.value;

                // Attempt to place the ship on the board using input values
                const attempt = this.turnManager.placeUserShip(ship, noseCoord, orientation)
                if (!attempt){
                    this.shipCannotBePlaced();
                } else {
                    this.hideShipInput(form);
                }
            })
        })
    }

    hideShipInput(form){
        form.style.visibility = 'hidden';
    }

    shipCannotBePlaced(){
        console.log('Invalid placement');
    }

    placeShips(ships, gameboard){

        for (let i = 0; i < ships.length; i += 1){
            for (let j = 0; j < ships[i].locations.length; j += 1){
                const gridCoord = ships[i].locations[j];
                const convertedCoord = this.generateGridMarker(...gridCoord);
                console.log(convertedCoord);
                const selector = `.${gameboard}-board .${convertedCoord}`;
                console.log(selector);
                const gridDiv = document.querySelector(selector);
                gridDiv.classList.add('ship');
            }
        }

    }



}

export default GUIManager;