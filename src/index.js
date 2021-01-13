import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index";
import Lists from "./Components/Assignments/Assignment3/Lists";
// import SumAverage from "./Components/Assignments/Assignment3/SumAverage";

ReactDOM.render(
  <React.StrictMode>
    <Lists />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
