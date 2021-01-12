import React, { useState } from "react";
import "./CalculatorTwo.css";
import CalculatorTwoChild from "./CalculatorTwoChild";

function CalculatorTwo() {
  const [numOne, setNumOne] = useState();
  const [numTwo, setNumTwo] = useState();

  return (
    <div className="calculator">
      <h2>Basic Calculator 🚀</h2>
      <p>Assignment-2 </p>
      <p> ( Passing param between two Components. ) </p>

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
        <CalculatorTwoChild numOne={numOne} numTwo={numTwo} />
      </div>
    </div>
  );
}

export default CalculatorTwo;
