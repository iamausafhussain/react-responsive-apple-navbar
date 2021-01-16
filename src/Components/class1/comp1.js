import React, { Component } from "react";
import LifeCycle from "../class3/LifeCycle";

export class Comp1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  render() {
    return (
      <div>
        {this.state.show === true ? (
          <LifeCycle />
        ) : (
          <button onClick={this.handleShow}>show</button>
        )}
      </div>
    );
  }
}

export default Comp1;
