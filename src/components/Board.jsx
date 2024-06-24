import { useState } from "react";

const Board = () => {
  const [gameState, setGameState] = useState(0); // 0 means game is stop right now
  const [matrix, setMatrix] = useState(
    Array.from({ length: 50 }, (_, rowIndex) =>
      Array.from({ length: 50 }, (_, colIndex) => ({
        value: 0,
        rowIndex,
        colIndex,
        key: `${rowIndex}-${colIndex}`,
      }))
    )
  );

  const handleClick = (i, j) => {
    const newMatrix = matrix.map((row, rowIndex) =>
      row.map((v, colIndex) => {
        if (i == rowIndex && colIndex == j) {
          return { ...v, value: !matrix[i][j].value };
        }
        return v;
      })
    );
    setMatrix(newMatrix);
  };

  return (
    <div className="md:flex-1 mt-4 items-center md:flex flex-col gap-2">
      <Action />
      <div className="grid my-8 w-max border-gray-600 border-4 border-double grid-cols-[repeat(50,minmax(0,1fr))]">
        {matrix.map((arr) =>
          arr.map((v) => (
            <Box
              handleClick={handleClick}
              rowIndex={v.rowIndex}
              colIndex={v.colIndex}
              value={v.value}
              key={v.key}
            />
          ))
        )}
      </div>
      <p>Generation Count: 12</p>
    </div>
  );
};

const Action = () => {
  return (
    <div className="text-black min-w-max flex space-x-4">
      <button className="bg-mygreen p-1 active:bg-[#6bcb47]">Pause</button>
      <button className="bg-mygreen p-1 active:bg-[#6bcb47]">Random</button>
      <select className="text-sm bg-gray-200 outline-none">
        <option>Glider Gun</option>
        <option>Pulsar</option>
        <option>Maximum Density Still Life</option>
      </select>
      <button className="bg-mygreen p-1  active:bg-[#6bcb47]">Clear</button>
    </div>
  );
};

const Box = ({ handleClick, value, rowIndex, colIndex }) => {
  return (
    <div
      className={`box w-2 h-2 md:w-[9px] md:h-[9px] ${
        value ? "bg-mygreen" : ""
      } border border-gray-600`}
      onClick={() => handleClick(rowIndex, colIndex)}
    ></div>
  );
};

export default Board;
