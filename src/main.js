const circleFigure = "/media/pictures/circle.png"
const exFigure = "/media/pictures/x.png"

const cells = document.getElementsByTagName("td")
const movesRecord = []
const gameOver = false

function checkClick(event){
    cellId = event.target.id.toString()
    cellImgQuery = `tr.row td#${cellId} img`
    if (document.querySelector(cellImgQuery).src == document.URL) {
        insertFigure(cellImgQuery)
    }

    if(movesRecord.length == 9) {
        setTimeout(() => {
            reloadSite()
        }, 500)
    }
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
    console.log(movesRecord.length)
    document.querySelector(cellImgQuery).src = figure
}

function reloadSite() {
        let newGame = confirm("GAME OVER\n ¿Do you wish to play again?")
        if(newGame){
            setTimeout("location.reload(true);", 100)
        }
}

for (let cell of cells){
    cell.addEventListener("click", checkClick)
}
