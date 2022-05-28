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
  // const [board, setBoard] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const newHistory = history.slice(0, stepNumber + 1);
  const current = newHistory[stepNumber];
  const winner = calculateWinner(current.squares);

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };
  const moves = newHistory.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const handleClick = (i) => {
    const boardCopy = current.squares.slice();
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setHistory(newHistory.concat([{ squares: boardCopy }]));
    setXIsNext(!xIsNext);
    setStepNumber(newHistory.length);
  };

  const renderMoves = () => {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          setStepNumber(0);
          setXIsNext(true);
        }}
      >
        Start Game
      </button>
    );
  };
  return (
    <div className="d-flex">
      <div>
        <div className="status">
          <h2>
            {winner
              ? "Winner: Player " + winner
              : "Next Player: " + (xIsNext ? "X" : "O")}
          </h2>
        </div>
        <Board squares={current.squares} onClick={handleClick} />
        <div className="button">{renderMoves()}</div>
      </div>
      <div className="ml-5 mt-5 display-4">
        <ol className="h2">{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
