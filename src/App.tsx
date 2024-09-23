import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <div>{value}</div>

      <div>
        <button onClick={() => setValue((value) => value + "1")}>1</button>
        <button onClick={() => setValue((value) => value + "2")}>2</button>
        <button onClick={() => setValue((value) => value + "3")}>3</button>
      </div>
      <div>
        <button onClick={() => setValue((value) => value + "4")}>4</button>
        <button onClick={() => setValue((value) => value + "5")}>5</button>
        <button onClick={() => setValue((value) => value + "6")}>6</button>
      </div>
      <div>
        <button onClick={() => setValue((value) => value + "7")}>7</button>
        <button onClick={() => setValue((value) => value + "8")}>8</button>
        <button onClick={() => setValue((value) => value + "9")}>9</button>
      </div>
    </>
  );
}

export default App;
