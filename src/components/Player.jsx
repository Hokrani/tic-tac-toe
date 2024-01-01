import { useState } from "react"

export default function Player({initialName,symbol,isActive}){
  const [isEditing,setIsEditing]=useState(false);
  const [playerName,setPlayerName]=useState(initialName);

  const handleClick=()=>{
    setIsEditing((editing)=>!editing);
  }

  const changeHandler=(e)=>{
    setPlayerName(e.target.value);
  }

  let editablePlayerName=<span className="player-name">{playerName}</span>;
  if(isEditing){
    editablePlayerName=<input onChange={changeHandler} type="text" required value={playerName}/>;
  }
    return<li className={isActive ?'active':undefined}>
            <span className="player">
             {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ?"Save" : "Edit"} </button>
          </li>    
}