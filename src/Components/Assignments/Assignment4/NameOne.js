import React, { Component } from "react";

class NameOne extends Component {
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
        <h3> This is {this.props.name} Component. </h3>
      </div>
    );
  }
}

export default NameOne;
