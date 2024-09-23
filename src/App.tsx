import { useState } from "react";
import Calculator from "./calculator";

function App() {
  const [display, setDisplay] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [operator, setOperator] = useState("");

  const handleValue = (value: string) => {
    if (operator.length === 0) {
      if (value1.length < 4) {
        setValue1((prevValue1) => prevValue1 + value);
        setDisplay((prevDisplay) => prevDisplay + value);
      }
    } else {
      if (value2.length < 4) {
        setValue2((prevValue2) =>
          value2.length === 0 ? value : prevValue2 + value
        );
        setDisplay((prevDisplay) =>
          value2.length === 0 ? value : prevDisplay + value
        );
      }
    }
  };

  const handleOperator = (value: string) => {
    if (value2.length === 0) {
      setOperator(value);
      setDisplay(value);
    } else {
      handleCalculate();
      setOperator(value);
    }
  };

  const handleCalculate = () => {
    const val1 = parseFloat(value1);
    const val2 = parseFloat(value2);
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
        total = val2 !== 0 ? val1 / val2 : "Error";
        break;
      default:
        total = "Error";
    }

    if (typeof total === "number" && total < 1) {
      setDisplay(total.toFixed(2).toString());
      setValue1(total.toFixed(2).toString());
    } else {
      setDisplay(total.toString());
      setValue1(total.toString());
    }

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
    <div>
      <Calculator
        handleCalculate={handleCalculate}
        handleClear={handleClear}
        handleOperator={handleOperator}
        handleValue={handleValue}
        display={display}
      />
    </div>
  );
}

export default App;
