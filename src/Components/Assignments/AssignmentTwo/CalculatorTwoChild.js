import React, { useState } from "react";

function CalculatorTwoChild({ numOne, numTwo }) {
  const [result, setResult] = useState();

  function calculateAddResult() {
    setResult(numOne + numTwo);
  }

  function calculateSubtractResult() {
    setResult(numOne - numTwo);
  }

  function calculateMultiplyResult() {
    setResult(numOne * numTwo);
  }

  function calculateDivideResult() {
    setResult(numOne / numTwo);
  }
  return (
    <div>
      <button className="calculator__button" onClick={calculateAddResult}>
        Add
      </button>
      <button className="calculator__button" onClick={calculateSubtractResult}>
        Subtract
      </button>
      <button className="calculator__button" onClick={calculateMultiplyResult}>
        Multiply
      </button>
      <button className="calculator__button" onClick={calculateDivideResult}>
        Divide
      </button>
      <h3>Result = {result} </h3>
    </div>
  );
}

export default CalculatorTwoChild;
