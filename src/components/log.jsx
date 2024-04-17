import React from 'react'

export default function Log({log}) {
    let ind=1;
  return (
    <ol id="log">
        {log.map((val)=><li key={(val.row*3+val.col)}>{ind++}..  {val.st} Pressed Row- {val.row+1}, Col- {val.col+1}</li>)}
    </ol>
  )
}
