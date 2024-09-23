import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [operator, setOperator] = useState("");

  console.log("value1", value1);
  console.log("value2", value2);

  const handleValue = (value: string) => {
    if (operator.length === 0) {
      if (value1.length < 4) {
        setValue1((prevValue1) => prevValue1 + value);
        setDisplay((prevValue1) => prevValue1 + value);
      }
    } else {
      if (value2.length === 0) {
        setValue2(value);
        setDisplay(value);
      } else {
        if (value2.length < 4) {
          setValue2((prevValue2) => prevValue2 + value);
          setDisplay((prevValue2) => prevValue2 + value);
        }
      }
    }
  };

  const handleOperator = (value: string) => {
    setOperator(value);
    setDisplay(value);
  };

  const handleCalculate = () => {
    const val1 = parseInt(value1);
    const val2 = parseInt(value2);
    let total;

    if (isNaN(val1) || isNaN(val2)) {
      setDisplay("Error");
      setValue1("Error");
      setValue2("");
      setOperator("");
      return;
    }

    switch (operator) {
      case "+":
        total = val1 + val2;
        break;
      case "-":
        total = val1 - val2;
        break;
      case "x":
        total = val1 * val2;
        break;
      case "/":
        total = val1 / val2;
        break;
      default:
        total = "Error";
    }

    setDisplay(total.toString());
    setValue1(total.toString());
    setValue2("");
    setOperator("");
  };

  const handleClear = () => {
    setValue1("");
    setValue2("");
    setOperator("");
    setDisplay("");
  };

  return (
    <div className="bg-black w-56 h-96 m-auto mt-10 p-4 text-white rounded-lg">
      <div className="h-32 text-right text-4xl pt-10">{display}</div>

      <div>
        <button
          className="rounded-full bg-neutral-600 w-10 h-10 m-1"
          onClick={() => handleValue("1")}
        >
          1
        </button>
        <button
          className="rounded-full bg-neutral-600 w-10 h-10 m-1"
          onClick={() => handleValue("2")}
        >
          2
        </button>
        <button
          className="rounded-full bg-neutral-600 w-10 h-10 m-1"
          onClick={() => handleValue("3")}
        >
          3
        </button>
        <button
          className="rounded-full bg-orange-400 w-10 h-10 m-1"
          onClick={() => handleOperator("/")}
        >
          /
        </button>
      </div>
      <div>
        <button
          className="rounded-full bg-neutral-600 w-10 h-10 m-1"
          onClick={() => handleValue("4")}
        >
          4
        </button>
        <button
          className="rounded-full bg-neutral-600 w-10 h-10 m-1"
          onClick={() => handleValue("5")}
        >
          5
        </button>
        <button
          className="rounded-full bg-neutral-600 w-10 h-10 m-1"
          onClick={() => handleValue("6")}
        >
          6
        </button>
        <button
          className="rounded-full bg-orange-400 w-10 h-10 m-1"
          onClick={() => handleOperator("x")}
        >
          x
        </button>
      </div>
      <div>
        <button
          className="rounded-full bg-neutral-600 w-10 h-10 m-1"
          onClick={() => handleValue("7")}
        >
          7
        </button>
        <button
          className="rounded-full bg-neutral-600 w-10 h-10 m-1"
          onClick={() => handleValue("8")}
        >
          8
        </button>
        <button
          className="rounded-full bg-neutral-600 w-10 h-10 m-1"
          onClick={() => handleValue("9")}
        >
          9
        </button>
        <button
          className="rounded-full bg-orange-400 w-10 h-10 m-1"
          onClick={() => handleOperator("-")}
        >
          -
        </button>
      </div>
      <div>
        <button
          className="rounded-full bg-neutral-400 w-10 h-10 m-1"
          onClick={() => handleValue("0")}
        >
          0
        </button>
        <button
          className="rounded-full bg-neutral-400 w-10 h-10 m-1"
          onClick={() => handleClear()}
        >
          C
        </button>
        <button
          className="rounded-full bg-neutral-400 w-10 h-10 m-1"
          onClick={() => handleCalculate()}
        >
          =
        </button>
        <button
          className="rounded-full bg-orange-400 w-10 h-10 m-1"
          onClick={() => handleOperator("+")}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
