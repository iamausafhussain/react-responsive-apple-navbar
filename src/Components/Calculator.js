// Assignment One

import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [num1, setNumOne] = useState();
  const [num2, setNumTwo] = useState();
  const [result, setResult] = useState();

  function calculateAddResult() {
    setResult(num1 + num2);
  }

  function calculateSubtractResult() {
    setResult(num1 - num2);
  }

  function calculateMultiplyResult() {
    setResult(num1 * num2);
  }

  function calculateDivideResult() {
    setResult(num1 / num2);
  }

  return (
    <div className="calculator">
      <h2>Basic Calculator 🚀</h2>

      {/* Creating Input Fields */}

      <input
        type="number"
        className="calculator__inputOne"
        placeholder="Enter first Number"
        onChange={(e) => setNumOne(+e.target.value)}
      />
      <input
        type="number"
        className="calculator__inputTwo"
        placeholder="Enter second Number"
        onChange={(e) => setNumTwo(+e.target.value)}
      />

      {/* creating buttons for Operations */}

      <div className="calculator__buttons">
        <button className="calculator__button" onClick={calculateAddResult}>
          Add
        </button>
        <button
          className="calculator__button"
          onClick={calculateSubtractResult}
        >
          Subtract
        </button>
        <button
          className="calculator__button"
          onClick={calculateMultiplyResult}
        >
          Multiply
        </button>
        <button className="calculator__button" onClick={calculateDivideResult}>
          Divide
        </button>
      </div>

      <h3>Result = {result} </h3>
    </div>
  );
}

export default Calculator;
