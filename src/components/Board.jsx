const Board = () => {
  const boxes = Array.from({ length: 50 * 50 }, (_, i) => (
    <div
      key={i}
      className="box w-2 h-2 md:w-[9px] md:h-[9px] border border-gray-600"
    ></div>
  ));

  return (
    <div className="md:flex-1 mt-4 items-center md:flex flex-col gap-2">
      <Action />
      <div className="grid my-8 w-max border-gray-600 border-4 border-double grid-cols-[repeat(50,minmax(0,1fr))]">
        {boxes}
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
        <option>Glider Gun</option>
      </select>
      <button className="bg-mygreen p-1  active:bg-[#6bcb47]">Clear</button>
    </div>
  );
};

export default Board;
