

export default function Gameboard({gameboard,functionn}) {
  
  return (
    <ol id="game-board">
       {gameboard.map((row,rowind)=>(
        <li key={rowind}>
            <ol>
                {row.map((symbol,colind)=>(
                    <li key={colind}>
                      <button onClick={()=>functionn(rowind,colind)}>{symbol}</button>
                    </li>
                ))}
            </ol>
        </li>
       ))} 
    </ol>
  )
}
