import { useState } from "react"

const initialGameBoard =[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

export default function GameBoard({onSelectSquare,activePlayerSymbol}){
    let[gameBoard, setGameBorad]= useState(initialGameBoard);
    function handleGameClick(rowIndex,colIndex){
        setGameBorad((prevGameBoard)=> {
            const updatedBoard=[...prevGameBoard.map( innerArray=>[...innerArray])];

            updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
            return updatedBoard;

        })
        onSelectSquare();
    }
    return(
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) =><li key={rowIndex}>
                <ol>
                    {row.map((col, colIndex) => <li key={colIndex}> <button onClick={() =>handleGameClick(rowIndex,colIndex)}>{col}</button></li>)}
                </ol>
            </li>)}

        </ol>
    )

}