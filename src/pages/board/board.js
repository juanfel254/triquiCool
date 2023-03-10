import styles from "./board.module.css";

export default function Board({ cells }) {
  console.log(cells)
  const generateCells = () => {
    let rowOfCells = cells.map((state, index) => {
      return (
        <td className="indv-cell" id={index}>
          <Image 
            src = {state}
            width = {250}
            height = {250}
            alt = "cell"
            />
        </td> )
    })
    return rowOfCells;
  }
  return (
    <section className={styles.boardContainer}>
      <table className="board">
        <tr>{generateCells()}</tr>
      </table>
    </section>
  )
}