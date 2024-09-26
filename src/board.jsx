import { useState } from "react";

const Square = ({ id }) => {
  const [color, setColor] = useState("green");
  const palet = ["red", "blue", "green"];
  const getRandomColor = () => palet[Math.floor(Math.random() * 3)];

  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        const newColor = getRandomColor();
        setColor(newColor);
        event.target.style.backgroundColor = newColor;
      }}
    >
      <h1>{id}</h1>
    </button>
  );
};

const Board = () => {
  const [player, setPlayer] = useState(1);

  const renderSquare = (i) => <Square id={i}></Square>;

  return (
    <div
      className="game-board"
      onClick={(event) => {
        setPlayer((prevPlayer) => (prevPlayer ? 0 : 1));
        event.currentTarget.style.background = "red";
        event.target.style.width = "200px";
        event.target.style.height = "200px";
      }}
    >
      <div className="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div id="info">
        <h1>{`Player ${player}`}</h1>
      </div>
    </div>
  );
};

export default Board;
