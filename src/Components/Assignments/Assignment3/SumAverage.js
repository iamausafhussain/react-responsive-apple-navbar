import React, { Component } from "react";
import "./SumAverage.css";

class SumAverage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a: "",
      b: "",
      Result: 0,
      Sum: 0,
      Average: 0,
    };
  }

  handleChangeA = (event) => {
    this.setState({
      a: event.target.value,
    });
  };

  handleChangeB = (event) => {
    this.setState({
      b: event.target.value,
    });
  };

  handleClick = () => {
    this.setState(
      {
        Result: parseInt(this.state.a) + parseInt(this.state.b),
      },
      () => {
        this.setState(
          {
            Sum: this.state.Result + this.state.Sum,
          },
          () => {
            this.setState({
              Average: this.state.Sum / 2,
            });
          }
        );
      }
    );
  };

  handleClickRemove = () => {
    this.setState({
      a: "",
      b: "",
      Result: 0,
      Sum: 0,
      Average: 0,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="container__app">
          <h2 className="container__appH2">Add and Average🚀</h2>
          <input
            className="container__appInput"
            placeholder="Enter a number"
            value={this.state.a}
            onChange={this.handleChangeA}
          />
          <input
            className="container__appInput"
            placeholder="Enter a number"
            value={this.state.b}
            onChange={this.handleChangeB}
          />
          <div className="container__appButtons">
            <button className="container__appButton" onClick={this.handleClick}>
              Calculate Result
            </button>
            <button
              className="container__appButton"
              onClick={this.handleClickRemove}
            >
              Reset
            </button>
          </div>

          <div className="container__appDisplay">
            <p className="one container__appDisplayResult">
              Result: {this.state.Result}{" "}
            </p>
            <p className="one container__appDisplaySum">
              Sum: {this.state.Sum}{" "}
            </p>
            <p className="one container__appDisplayAverage">
              Average: {this.state.Average}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SumAverage;
