

export default function GameOver({winner,onRestart}){
 return <div id="game-over">
    <h2> Game Over </h2>
    {winner && <p>{winner} won!</p>}
    {!winner && <p>Game Draw</p>}
    <p>
        <button onClick={onRestart}>ReStart</button>
    </p>

 </div>

}