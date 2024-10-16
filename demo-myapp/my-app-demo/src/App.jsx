import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-cobinations.js"




function deriveAcgivePlayer(gameTurns){
  let currentPlayer = 'X';
  if(gameTurns.length>0 && gameTurns[0].player ==='X'){
    currentPlayer='O'
  }
  return currentPlayer;
}


function App() {
  
//const [activePlayer, setActivePlayer]=useState('X');
const [gameTurns , setGameTurns] = useState([]);

const activePlayer = deriveAcgivePlayer(gameTurns)

function handleSelectSquare(rowIndex,colIndex){

  setGameTurns((preTurns) =>{
    // let currentPlayer = 'X';
    // if(preTurns.length>0 && preTurns[0].player ==='X'){
    //   currentPlayer='O'
    // }
    const currentPlayer = deriveAcgivePlayer(preTurns)
    const updatedTurns = [
      {square:{row:rowIndex, col:colIndex},player:currentPlayer}, ...preTurns
    ]
  return updatedTurns;

  })
}
  return (
     <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer==='X'}></Player>
          <Player name="Player 2" symbol="O" isActive={activePlayer==='O'}></Player>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}></GameBoard>
      </div>
      <Log turns={gameTurns}></Log> 

     </main>
  )
}

export default App
