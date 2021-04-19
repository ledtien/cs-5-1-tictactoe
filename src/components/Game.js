import React from "react";
import { useState } from "react";
import Board from "./Board.js";

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],

    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const renderMoves = () => {
    return (
      <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
    );
  };
  return (
    <>
      <div className="status">
        <h2>
          {winner
            ? "Winner: Player " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </h2>
      </div>
      <Board squares={board} onClick={handleClick} />
      <div className="button">{renderMoves()}</div>
    </>
  );
};

export default Game;
