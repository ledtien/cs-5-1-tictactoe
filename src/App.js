import { Button, Container } from "react-bootstrap";
import { useState } from "react";
import "./App.css";

const Square = (props) => {
  return (
    <button
      className="square"
      onClick={() => props.onSquareClicked(props.index)}
    >
      {props.hi}
    </button>
  );
};
const Board = (props) => {
  const [xIsNext, setXIsNext] = useState(true);

  const onSquareClicked = (i) => {
    if (props.squares[i]) {
      return;
    }
    const newSquares = props.squares;
    newSquares[i] = xIsNext ? "X" : "O";
    props.setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    return (
      <Square
        index={i}
        hi={props.squares[i]}
        onSquareClicked={onSquareClicked}
      />
    );
  };
  const status = xIsNext ? "Next Player: X" : "Next Player: O";

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <div>
      <div>
        <Board squares={squares} setSquares={setSquares} />
      </div>
      <div></div>
    </div>
  );
};

// const calculateWinner = () => {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// };
function App() {
  return (
    <div className="App container">
      <Game />
    </div>
  );
}

export default App;
