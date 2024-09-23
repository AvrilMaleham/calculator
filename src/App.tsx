import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="bg-black w-56 h-96 m-auto mt-10 p-4 text-white rounded-lg">
      <div className="h-32 text-right text-4xl pt-10">{value}</div>

      <div>
        <button className="rounded-full bg-neutral-600 w-10 h-10 m-1" onClick={() => setValue((value) => value + "1")}>1</button>
        <button className="rounded-full bg-neutral-600 w-10 h-10 m-1" onClick={() => setValue((value) => value + "2")}>2</button>
        <button className="rounded-full bg-neutral-600 w-10 h-10 m-1" onClick={() => setValue((value) => value + "3")}>3</button>
        <button className="rounded-full bg-orange-400 w-10 h-10 m-1" onClick={() => setValue((value) => value + "/")}>/</button>
      </div>
      <div>
        <button className="rounded-full bg-neutral-600 w-10 h-10 m-1" onClick={() => setValue((value) => value + "4")}>4</button>
        <button className="rounded-full bg-neutral-600 w-10 h-10 m-1" onClick={() => setValue((value) => value + "5")}>5</button>
        <button className="rounded-full bg-neutral-600 w-10 h-10 m-1" onClick={() => setValue((value) => value + "6")}>6</button>
        <button className="rounded-full bg-orange-400 w-10 h-10 m-1" onClick={() => setValue((value) => value + "x")}>x</button>
      </div>
      <div>
        <button className="rounded-full bg-neutral-600 w-10 h-10 m-1" onClick={() => setValue((value) => value + "7")}>7</button>
        <button className="rounded-full bg-neutral-600 w-10 h-10 m-1" onClick={() => setValue((value) => value + "8")}>8</button>
        <button className="rounded-full bg-neutral-600 w-10 h-10 m-1" onClick={() => setValue((value) => value + "9")}>9</button>
        <button className="rounded-full bg-orange-400 w-10 h-10 m-1" onClick={() => setValue((value) => value + "-")}>-</button>
      </div>
      <div>
        <button className="rounded-full bg-neutral-400 w-10 h-10 m-1" onClick={() => setValue((value) => value + "0")}>0</button>
        <button className="rounded-full bg-neutral-400 w-10 h-10 m-1" onClick={() => setValue("")}>C</button>
        <button className="rounded-full bg-neutral-400 w-10 h-10 m-1" onClick={() => setValue((value) => value + "=")}>=</button>
        <button className="rounded-full bg-orange-400 w-10 h-10 m-1" onClick={() => setValue((value) => value + "+")}>+</button>
      </div>
    </div>
  );
}

export default App;
