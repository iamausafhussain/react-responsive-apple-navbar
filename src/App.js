import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: "Hello React"
    }
  }

  funcHandle = (event) => {
    this.setState ( {
      a: event.target.value
    })
  }

  handleClick = () => {
    this.setState ( {
      a: ""
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.a} onChange={this.funcHandle} />
        <br></br>
        {this.state.a}
        <br></br>
        <button onClick={this.handleClick}>
          Reset input
        </button>
      </div>
    )
  }
} 