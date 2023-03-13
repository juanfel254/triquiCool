import styles from "@/styles/board.module.css";

export default function Board({ moves, setMoves }) {

  let record = [];

  const handleClick = (setMoves, moves, row, column, record) => () => {
    setMoves(moves.map((move, index) => {
      if (index === row*3+column-3) {
        record.push(index); 
        console.log(index, record);
        return "X";
      } return move;
      }));
  };
  
  const fillRow = (row, moves, record) => {
    return (moves.slice(-3 + row*3,row*3).map((move, column) => 
      <li 
        className={styles.cell} 
        onClick={handleClick(setMoves, moves, row, column, record)}
        key={column+row}>{move} 
      </li>
    ))
  }
  
  return (
    <div className={styles.boardContainer}>

      <ul className={styles.table}>
        <li className={styles.row_container}>
          <ul className={styles.row}>
            {fillRow(1, moves, record)}
          </ul>
        </li>
        <li className={styles.row_container}>
          <ul className={styles.row}>
            {fillRow(2, moves, record)}
          </ul>
        </li>
        <li className={styles.row_container}>
          <ul className={styles.row}>
            {fillRow(3, moves, record)}
          </ul>
        </li>
      </ul>
      
    </div>
  )
}