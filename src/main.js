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
    "circleMoves": [],
    "exMoves": [],
}

// 1. Get all cells from the board
const cells = document.getElementsByTagName("td");

// 3. After clicking any cell, check cell and board status
function checkClick(event){
    let gameOver = checkBoard()
    let cellId = event.target.id;
    let queryCellClicked = `tr.row td#${cellId} img`;
    let cellImgTag = document.querySelector(queryCellClicked);
    if (cellImgTag.src == document.URL && gameOver == false) {
        insertImg(cellId, cellImgTag)
    }
};

function insertImg(cellId, cellImgTag) {
    let totalMoves = gameRecord['circleMoves'].length + gameRecord['exMoves'].length;
    let figure = '';
    if (totalMoves%2 == 0){
        figure = 'circle'
    }
    else {
        figure = 'ex';
    }
    cellImgTag.src = picturesUrl + figure + ".png";
    gameRecord[`${figure}Moves`].push(textNum[cellId]);
    console.log(gameRecord);
}

function checkBoard(){
    return false
}

// 2. event listener type click added on all cells gotten on step 1
for (let cell of cells){
    cell.addEventListener("click", checkClick);
};
