import gif from "./../assets/ttk.gif";

const Description = () => {
  return (
    <div className="flex-1 space-y-6">
      <figure>
        <img
          src={gif}
          alt="The Game of Life on the surface of a toroidal trefoil knot"
          className=" w-52  md:w-72 h-auto"
        />
        <figcaption className="text-sm">
          The surface of a toroidal trefoil knot
        </figcaption>
      </figure>
      <p className="my-12 text-sm">
        <a
          href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Rules"
          target="_blank"
          className="underline text-blue-700 decoration-mygreen underline-offset-2"
        >
          Conway&apos;s game of life
        </a>{" "}
        is a 0-player <em>Turing-complete </em>game. The Game of Life is
        undecidable, which means that given an initial pattern and a later
        pattern, no algorithm exists that can tell whether the later pattern is
        ever going to appear. Given that the Game of Life is Turing-complete,
        this is a corollary of the halting problem: the problem of determining
        whether a given program will finish running or continue to run forever
        from an initial input.
      </p>

      <ul className="text-sm space-y-2">
        <span className="underline decoration-mygreen"> Rule:</span>
        <li>
          Any live cell with fewer than two live neighbours dies, as if by
          underpopulation.
        </li>
        <li>
          Any live cell with two or three live neighbours lives on to the next
          generation.
        </li>
        <li>
          Any live cell with more than three live neighbours dies, as if by
          overpopulation.
        </li>
      </ul>
    </div>
  );
};

export default Description;
