import { useState } from "react"

const initialGameBoard =[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

export default function GameBoard({onSelectSquare,turns}){
    // let[gameBoard, setGameBorad]= useState(initialGameBoard);
    // function handleGameClick(rowIndex,colIndex){
    //     setGameBorad((prevGameBoard)=> {
    //         const updatedBoard=[...prevGameBoard.map( innerArray=>[...innerArray])];

    //         updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
    //         return updatedBoard;

    //     })
    //     onSelectSquare();
    // }
    let gameBoard = initialGameBoard;
    for(const turn of turns){
        const {square, player}= turn;
        const {row,col}= square;
        gameBoard[row][col] =player;
    }
    



    return(
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) =><li key={rowIndex}>
                <ol>
                    {row.map((col, colIndex) => <li key={colIndex}> <button onClick={() =>onSelectSquare(rowIndex,colIndex)} disabled={col !=null}>{col}</button></li>)}
                </ol>
            </li>)}

        </ol>
    )

}