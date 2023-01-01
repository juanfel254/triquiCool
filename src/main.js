const circleFigure = "/media/pictures/circle.png"
const exFigure = "/media/pictures/x.png"

const cells = document.getElementsByTagName("td")

function identifyCellClicked(event) {
    cellId = event.target.id.toString()
    cellImgQuery = `tr.row td#${cellId} img`
    console.log(document.querySelector(cellImgQuery))
    document.querySelector(cellImgQuery).src = exFigure
}

for (let cell of cells){
    cell.addEventListener("click", identifyCellClicked)
}

