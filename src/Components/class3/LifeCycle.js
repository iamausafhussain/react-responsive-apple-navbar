import React, { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  // componentDidMount() {
  //   console.log("From component will mount");
  // }

  // componentDIdUpdate() {
  //   console.log("From component did Update");
  // }

  // componentWillUnmount() {
  //   console.log("From component will Unmount");
  // }

  // handleChange = () {
  //   this.setState()
  // }

  render() {
    return (
      <div>
        <p>Hello from LifeCycle Component.</p>
        <button onClick={this.componentDidMount}>Change Value</button>
        <button>Move back</button>
      </div>
    );
  }
}

export default LifeCycle;
