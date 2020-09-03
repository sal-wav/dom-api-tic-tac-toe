let currentPlayerSymbol = "X";
let squareValues = ["", "", "", "", "", "", "", "", ""];

window.addEventListener("DOMContentLoaded", event => {
    const grid = document.getElementById('tic-tac-toe-board')
    grid.addEventListener('click', event => {
        if (event.target.id.includes('square-')) {
            let num = Number.parseInt(event.target.id[7])
            if (squareValues[num] === "") {
                squareValues[num] = currentPlayerSymbol;
            } else {
                return
            }
            console.log(squareValues);
        };
        let image = document.createElement('img');
        let x = image.setAttribute('src', '/images/player-x.svg');
        let o = image.setAttribute('src', '/images/player-o.svg');
    });
});
