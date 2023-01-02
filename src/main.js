// 1. Get all cells from the board
const cells = document.getElementsByTagName("td")

const movesRecord = []
const circleRecord = []
const exRecord = []
const gameOver = false

const circleFigure = "/media/pictures/circle.png"
const exFigure = "/media/pictures/x.png"

const winnerMoves = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,5,9],
    [3,5,7],
    [1,4,7],
    [2,5,8],
    [3,6,9]
]

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
}

// 3. After clicking any cell, check cell and board status
function checkClick(event){
    cellId = event.target.id
    cellImgQuery = `tr.row td#${cellId} img`
    // 3.1 Check if cell has a figure marked already or not
    if (document.querySelector(cellImgQuery).src == document.URL) {
        insertFigure(cellImgQuery)
        checkGame(circleRecord);
        checkGame(exRecord);
    }

    // 3.2 If the board is full, end the game
    if(movesRecord.length == 9) {
        checkGame(circleRecord);
        checkGame(exRecord);
        setTimeout(() => {
            reloadSite()
        }, 500)
    }
}

//3.1.1 Insert figure if cell clicked is empty
function insertFigure() {
    let figure = "";
    if (movesRecord.length%2 == 0){
        figure = circleFigure;
        circleRecord.push(textNum[cellId]);
        circleRecord.sort();
    }
    else {
        figure = exFigure;
        exRecord.push(textNum[cellId]);
        exRecord.sort();
    }
    // 3.1.2 Save record of the move
    movesRecord.push([cellId, figure])
    console.log(movesRecord.length)
    document.querySelector(cellImgQuery).src = figure
}

function checkGame(figure){
    console.log("Checking...")
    let i = 0;
    while (i < figure.length){
        for (let winnerMove of winnerMoves){
            for (let j = 0; j<winnerMove.length; j++){
                if (figure[i] == winnerMove[j]){ 
                    if (winnerMove[j] == winnerMove[winnerMove.length-1]){
                        setTimeout(()=>{
                            alert("GANASTE");
                            setTimeout(() => {
                                reloadSite()
                            }, 100)
                        }, 200);
                    }
                    console.log(figure[i], winnerMove)
                    i++; 
                }
                else {
                    i = 0;
                    break
                }
            }
        }
        break
    }
}

function reloadSite() {
        let newGame = confirm("GAME OVER\n ¿Do you wish to play again?")
        if(newGame){
            setTimeout("location.reload(true);", 100)
        }
}

// 2. event listener type click added on all cells gotten on step 1
for (let cell of cells){
    cell.addEventListener("click", checkClick)
}
