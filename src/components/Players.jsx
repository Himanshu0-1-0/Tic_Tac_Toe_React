import React,{useState} from 'react'

export default function Players({playerName,playerSymbol,isActive,changename}) {
    const [isediting,setisediting] =useState(false);
    const[plname,setplname]= useState(playerName);


    function edit(){
        setisediting(true);
    }
    function save(){
        const name= document.getElementById("access_val").value;
        setplname(name);
        changename(name,playerSymbol);
        setisediting(false);
    }
    function changeval(e){
        setplname(e.target.value);
    }


  return (
    <li className={isActive ? 'active':undefined}>
        <span className="player">
            {(isediting)?
                <input type="text" id="access_val" value={plname} onChange={changeval}/>
            :
                <span className="player-name">{plname}</span>
            }
          <span className="player-symbol">{playerSymbol}</span>
        </span>
        {(isediting)? 
             <button onClick={save}>Save</button>
        :
            <button onClick={edit}>Edit</button>
        }
    </li>
  )
}
