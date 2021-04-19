import React from "react";
import "../App.css";

const Square = ({ value, onClick }) => (
  <button className="squares" onClick={onClick}>
    {value}
  </button>
);

export default Square;
