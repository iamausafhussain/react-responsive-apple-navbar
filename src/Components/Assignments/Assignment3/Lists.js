import React, { Component } from "react";
import "./Lists.css";

class Lists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      userSkill: "",
      array: [],
    };
  }

  handleInputName = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };

  handleInputSkill = (e) => {
    this.setState({
      userSkill: e.target.value,
    });
  };

  handleAdd = () => {
    if (this.state.userName != "") {
      var tempName = this.state.userName;
      var tempSkill = this.state.userSkill;
      this.state.key = Math.random();

      const obj = { name: tempName, skill: tempSkill, key: this.state.key };

      this.setState({
        array: [...this.state.array, obj],
        userName: "",
        userSkill: "",
      });
    }
  };

  handleRemove = (e) => {
    var temp = this.state.array;

    var index = temp.indexOf(e.target.value);
    temp.splice(index, 1);

    this.setState({
      array: temp,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="container__app">
          <h4>Lists</h4>
          <p className="container__appPara">
            {this.state.array.map((obj) => {
              return (
                <div className="container__appParaArray">
                  <div className="container__appParaElement">
                    {obj.name} - {obj.skill}
                  </div>
                  <button
                    onClick={this.handleRemove}
                    className="container__appParaArrayButton"
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </p>

          <h4>Add User</h4>
          <div className="container__appAdd">
            <input
              onChange={this.handleInputName}
              value={this.state.userName}
              className="container__appInput"
              placeholder="Enter a name"
            />
            <input
              onChange={this.handleInputSkill}
              value={this.state.userSkill}
              className="container__appInput"
              placeholder="Enter a skill"
            />
            <button
              onClick={this.handleAdd}
              className="container__appInputButton container__appParaArrayButton"
            >
              Add User
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Lists;
