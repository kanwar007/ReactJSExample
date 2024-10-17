import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-cobinations.js"
import GameOver from "./components/GameOver.jsx"


const initialGameBoard =[
  [null,null,null],
  [null,null,null],
  [null,null,null]
]
const PLAYER= {
  'X': 'Player 1',
  'O': 'Player 2'
}


function deriveAcgivePlayer(gameTurns){
  let currentPlayer = 'X';
  if(gameTurns.length>0 && gameTurns[0].player ==='X'){
    currentPlayer='O'
  }
  return currentPlayer;
}

function deriveWinner(gameBoard,players){
  let winner;
for(const COMBINATION of WINNING_COMBINATIONS){
  const firstSquareSymbol = gameBoard[COMBINATION[0].row][COMBINATION[0].column];
  const secondSquareSymbol = gameBoard[COMBINATION[1].row][COMBINATION[1].column];
  const thirdSquareSymbol = gameBoard[COMBINATION[2].row][COMBINATION[2].column];

  if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
    winner=players[firstSquareSymbol];
  }

}
return winner;
}

function deriveGameBorad(gameTurns){
  let gameBoard = [...initialGameBoard.map(array => [...array])];
  for(const turn of gameTurns){
      const {square, player}= turn;
      const {row,col}= square;
      gameBoard[row][col] =player;
  }
  return gameBoard
}

function App() {

  const [players, setPlayers] = useState(PLAYER)
//const [activePlayer, setActivePlayer]=useState('X');
const [gameTurns , setGameTurns] = useState([]);

const activePlayer = deriveAcgivePlayer(gameTurns);
const gameBoard= deriveGameBorad(gameTurns)
const winner = deriveWinner(gameBoard,players)

const hasDraw = gameTurns.length === 9 && !winner;


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

function restartGame(){
  setGameTurns([]);
}
function handlePlayerNameChange(symbol, newName){
  setPlayers(prevPlayer => {
    return {
      ...prevPlayer,
      [symbol]:newName
    }

  })

}
  return (
     <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={PLAYER.X} symbol="X" isActive={activePlayer==='X'} onChangeName={handlePlayerNameChange}></Player>
          <Player name={PLAYER.O} symbol="O" isActive={activePlayer==='O'} onChangeName={handlePlayerNameChange}></Player>
        </ol>
        {(winner || hasDraw) && <GameOver winner= {winner} onRestart={restartGame}></GameOver>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}></GameBoard>
      </div>
      <Log turns={gameTurns}></Log> 

     </main>
  )
}

export default App
