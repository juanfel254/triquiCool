import styles from "@/styles/board.module.css";

export default function Board({ moves, setMoves }) {
  return (
    <div className={styles.boardContainer}>
      <p>I could put some info here</p>
      <table>
        <tbody>
          {[1,2,3].map(row => 
            <tr className="row" key={row}>
              {moves.slice(-3 + row*3,row*3).map((move, index) => 
                <td className="cell" key={index} onClick={setMoves(moves[index + 3*row - 3] = "X")}>{move}</td>
                )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}