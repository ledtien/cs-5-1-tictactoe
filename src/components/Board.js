import React from "react";
import Square from "./Square";
import "../App.css";

const Board = ({ squares, onClick }) => (
  <div className="board">
    {squares.map((square, i) => {
      return (
        <Square index={i} value={square} onClick={() => onClick(i)} key={i} />
      );
    })}
  </div>
);
export default Board;
