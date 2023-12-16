class GUIManager {
    constructor() {
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
    
    generateBoard(parentNode){
        for (let i = 0; i <= 10; i += 1){
            for (let j = 0; j <= 10; j += 1){
                const gridSquare = document.createElement('div');
                gridSquare.classList.add(this.generateGridMarker(i, j));
                gridSquare.classList.add('gridsquare');
                parentNode.appendChild(gridSquare);

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

    initialPageSetup(){
        console.log(`We're setting up the page`);
        const playerBoard = document.querySelector('.gameboards .player-board');
        const opponentBoard = document.querySelector('.gameboards .opponent-board');
        this.generateBoard(playerBoard);
        this.generateBoard(opponentBoard);
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