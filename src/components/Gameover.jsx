import React from 'react'

export default function Gameover({winner,restart}) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {(winner==="draw")? <p>Draw</p>:  <p>{winner} Won</p>}
      <p><button onClick={restart}>Rematch</button></p>
    </div>
  )
}
