let currentPlayerSymbol = "x";
let squareValues = ["", "", "", "", "", "", "", "", ""];
let gameStatus = '';

const checkGameStatus = function() {
    for (let i = 0; i < squareValues.length; i+2) {
        let row = currentPlayerSymbol
    }
}

window.addEventListener("DOMContentLoaded", event => {
    const grid = document.getElementById('tic-tac-toe-board')
    grid.addEventListener('click', event => {
        let image = document.createElement('img');
        let square = document.getElementById(event.target.id)
        image.setAttribute('src', `images/player-${currentPlayerSymbol}.svg`);
        square.appendChild(image);
        if (event.target.id.includes('square-')) {
            let num = Number.parseInt(event.target.id[7])
            if (squareValues[num] === "") {
                squareValues[num] = currentPlayerSymbol;
            } else {
            }
        };
        if (currentPlayerSymbol === 'x') {
            currentPlayerSymbol = 'o';

        } else {
            currentPlayerSymbol = 'x';
        }
    });
});
