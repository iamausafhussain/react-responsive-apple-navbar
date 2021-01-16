import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  componentDidMount() {
    console.log("Component Did Mount");
    console.log("-------------------");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update");
    console.log("-------------------");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
    console.log("-------------------");
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>decrement</button>
        <div>Counter: {this.state.counter}</div>
      </div>
    );
  }
}

export default Counter;
