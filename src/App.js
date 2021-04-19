import { Button } from "react-bootstrap";
import { useState } from "react";
import "./App.css";

const Square = ({ index }) => {
  const [value, setValue] = useState(null);
  return (
    <button className="square" onClick={() => setValue("X")}>
      {value}
    </button>
  );
};
const Board = () => {
  const renderSquare = (i) => {
    return <Square index={i} />;
  };
  const status = "Next Player: X";
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
  return (
    <div>
      <div>
        <Board />
      </div>
      <div></div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      Hello
      <Game />
    </div>
  );
}

export default App;
