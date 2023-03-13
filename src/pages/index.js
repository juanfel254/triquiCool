import { useState } from 'react';
import Head from 'next/head'
import Board from '@/components/game-board/board'
//import styles from '@/styles/Home.module.css'

export default function Home() {
  let [moves, setMoves] = useState(Array(9).fill(""));
  return (
    <>
      <Head>
        <title>Triquicool</title>
        <meta name="description" content="tic tac toe multiplayer and local online game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>
        <a 
        className='new-game-title' 
        onClick={() => setMoves(Array(9).fill(""))}
        >Clean Board</a>
      </h2>
      <Board 
        moves = {moves}
        setMoves = {setMoves}
        />
    </>
  )
}
