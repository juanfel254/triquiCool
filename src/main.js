const circleFigure = "/media/pictures/circle.png"
const exFigure = "/media/pictures/x.png"

const cells = document.getElementsByTagName("td")
const movesRecord = []
const gameOver = false

function identifyCellClicked(event){
    cellId = event.target.id.toString()
    //movesRecord.push(cellId)
    cellImgQuery = `tr.row td#${cellId} img`
    insertFigure()
}

function insertFigure() {
    let figure = ""
    if (movesRecord.length%2 == 0){
        figure = circleFigure
    }
    else {
        figure = exFigure
    }
    movesRecord.push([cellId, figure])
    console.log(movesRecord)
    document.querySelector(cellImgQuery).src = figure
}

for (let cell of cells){
    if (gameOver != true) {
        cell.addEventListener("click", identifyCellClicked)
    }
    else {
        alert("GAME OVER")
    }
}
