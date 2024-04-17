import Gameboard from "./components/Gameboard"
import Players from "./components/Players"
import Log  from "./components/log";
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./winning-combinations";
import Gameover from "./components/Gameover"
const arr =[
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

function App() {
  const[active,setactive]= useState('X');
  const[log,setlog]=useState([]);
  const [gameboard,setgameboard]= useState(arr);
  const [name,setnames]=useState({X:'Player 1',O:'Player 2'});

  let winner=null;
  for(const combinations of WINNING_COMBINATIONS){
    const f= gameboard[combinations[0].row][combinations[0].column];
    const s= gameboard[combinations[1].row][combinations[1].column];
    const t= gameboard[combinations[2].row][combinations[2].column];

    if(f && f===s && f===t){
      if(f==='X') winner=name.X;
      else winner=name.O;
    }

  }

  function changename(player,symbol){
    if(symbol==='X') setnames({'X':player,'O':name.O})
    else  setnames({'X':name.X,'O':player})
  }

  function changestate(row,col,st){
    setlog((prev)=>[...prev,{row,col,st}])
    setactive((prev)=>{
      if(prev==='X') return 'O';
      else {return 'X';}
    })
  }


  function update(rowi,coli){
    if(gameboard[rowi][coli]) return;
    setgameboard((prev)=>{
      const updated =[...prev.map(inner=>[...inner])];
      updated[rowi][coli]=active;
      return updated;
    });
    changestate(rowi,coli,active);
  }

  if(log.length===9 && !winner){
    winner="draw";
  }

  function rest(){
    setactive('X');
    setlog([]);
    setgameboard(arr);
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players playerName="Player 1" playerSymbol='X' isActive={active==='X'} changename={changename}></Players>
          <Players playerName="Player 2" playerSymbol='O' isActive={active==='O'} changename={changename}></Players>
        </ol>
        {winner&& <Gameover winner={winner} restart={rest}/>}
        <Gameboard  gameboard={gameboard} functionn={update}/>
      </div>
      <Log log={log}/>
    </main>
  )
}

export default App
