
import { useState } from "react";
export default function Player({name, symbol,isActive}){

    let [playerName,setPlayerName]=useState(name);
    let [isEditing, setIsEditing] = useState(false);
    function handleEditClick(){
        setIsEditing((editig) => !editig);
    }
    function handleChange(event){
        console.log(event)
        setPlayerName(event.target.value)
    }
    //let btnCaption = 'Edit';
    let editPlayerName= <span className="player-name"> {playerName}</span>;
    if(isEditing){
        editPlayerName =<input type="text" required value={playerName} onChange={handleChange}></input>
      //  btnCaption='Save'
    }
   

    
    return(
        <li className={isActive?'active' :undefined}>
            <span className="player">
            {editPlayerName}
            <span className="Player-symbol">{symbol}</span>
            </span>
             <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
    )
}