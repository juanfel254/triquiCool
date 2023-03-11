import styles from "@/styles/board.module.css";

export default function Board({ moves, setMoves }) {
  return (
    <div className={styles.boardContainer}>
      <table className={styles.table}>
        <tbody>
          {[1,2,3].map(row => 
            <tr className={styles.row} key={row}>
              {moves.slice(-3 + row*3,row*3).map((move, index) => 
                <td className={styles.cell} key={index}>{move}</td>
                )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}