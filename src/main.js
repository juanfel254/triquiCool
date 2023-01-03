const picturesUrl = "/media/pictures/";
const winnerMoves = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,5,9],
    [3,5,7],
    [1,4,7],
    [2,5,8],
    [3,6,9]
];

const textNum = {
    'num1': 1,
    'num2': 2,
    'num3': 3,
    'num4': 4,
    'num5': 5,
    'num6': 6,
    'num7': 7,
    'num8': 8,
    'num9': 9,
};

const gameRecord = {
    "circle": [],
    "ex": [],
}

let moves = 0;
const endGameSign = document.getElementById("announcement-title");
const playerSign = document.getElementById("player-name");
const newGameLink = document.getElementById("new-game");
playerSign.innerHTML = 'Circle goes first';

// 1. Get all cells from the board
const cells = document.getElementsByTagName("td");

// 3. After clicking any cell, check cell and board status
function checkClick(event){
    let totalMoves = gameRecord['circle'].length + gameRecord['ex'].length;
    let cellId = event.target.id;
    let queryCellClicked = `tr.row td#${cellId} img`;
    let cellImgTag = document.querySelector(queryCellClicked);
    if (cellImgTag.src == document.URL) {
        insertImg(cellId, cellImgTag, totalMoves)
    }
    gameOver()
};

// 4. Insert image of the figure when a move is allowed
function insertImg(cellId, cellImgTag, totalMoves) {
    let figure = totalMoves%2 ? 'ex' : 'circle';
    cellImgTag.src = picturesUrl + figure + ".png";
    gameRecord[`${figure}`].push(textNum[cellId]);
    let figureTurn = figure == 'circle' ? 'ex' : 'circle'
    figureName = figureTurn.charAt(0).toUpperCase() + figureTurn.slice(1);
    playerSign.innerHTML = `${figureName}'s turn`
    moves++;
}

// 5. After each move, check if the game has a winner
function gameOver(){
    for (let [key, value] of Object.entries(gameRecord)){
        for (let winnerMove of winnerMoves){
            let checkWin = (value, winnerMove) => winnerMove.every(move => value.includes(move));
            if (checkWin(value, winnerMove)){
                moves = 0;
                endGame(key)
            }
        }
    }
    if (moves == 9){
        endGame('no one')
    }
}

function endGame(key){
    winner = key.charAt(0).toUpperCase() + key.slice(1);
    setTimeout(() => {
        endGameSign.innerHTML = `${winner} wins`
        playerSign.innerHTML = '';
        newGameLink.href = document.URL;
        newGameLink.innerHTML = 'New Game'
    }, 100);
    for (let cell of cells){
        cell.style.pointerEvents = "none";
    }
}

// 2. event listener type click added on all cells gotten on step 1
for (let cell of cells){
    cell.addEventListener("click", checkClick);
};
