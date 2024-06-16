import Board from "./components/Board";
import Description from "./components/Description";

const App = () => {
  return (
    <div className="flex-grow tracking-wide">
      <h1 className="h1  text-center ">Conway&apos;s Game of Life</h1>
      <div className="content-container  gap-4 mt-4 md:mt-6 md:justify-between md:px-4 px-2 md:flex md:flex-row">
        <Description />
        <Board />
      </div>
    </div>
  );
};

export default App;
