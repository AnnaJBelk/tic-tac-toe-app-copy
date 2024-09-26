import { useState } from "react";

const Square = ({ id }) => {
  return (
    <button>
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
        event.target.style.background = "red";
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
