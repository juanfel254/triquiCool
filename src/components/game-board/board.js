import styles from "@/styles/board.module.css";

export default function Board({ moves, setMoves }) {

  const updateBoard = (row, column, moves, setMoves) => {
    return (() => {
      setMoves(moves.map((move, index) => index === row*3+column-3 ? "X" : move))
      })
  }

  return (
    <div className={styles.boardContainer}>
      <table className={styles.table}>
        <tbody>
          {[1,2,3].map(row => 
            <tr className={styles.row} key={row}>
              {moves.slice(-3 + row*3,row*3).map((move, column) => 
                <td 
                  className={styles.cell} 
                  onClick={updateBoard(row, column, moves, setMoves)}
                  key={column}>{move}
                </td>
                )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}