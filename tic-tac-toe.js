let currentPlayerSymbol = "X";
let squareValues = ["", "", "", "", "", "", "", "", ""];

window.addEventListener("DOMContentLoaded", event => {
    const grid = document.getElementById('tic-tac-toe-board')
    grid.addEventListener('click', event => {
        if (event.target.id.includes('square-')) {
            let num = Number.parseInt(event.target.id[7])
            if (squareValues[num] !== "") {

            };
        };
    });
});
