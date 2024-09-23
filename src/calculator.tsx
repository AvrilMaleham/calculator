type CalculatorProps = {
  display: string;
  handleValue: (value: string) => void;
  handleCalculate: () => void;
  handleClear: () => void;
  handleOperator: (value: string) => void;
};

function Calculator({
  display,
  handleValue,
  handleCalculate,
  handleClear,
  handleOperator,
}: CalculatorProps) {
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

export default Calculator;
