import styles from "@/styles/header.module.css"

export default function Header () {
  return (
    <header className={styles.header}>
      <h1>TriquiCool</h1>
      <ul>
        <li>New Game</li>
        <li>Games Record</li>
      </ul>
    </header>
  );
}