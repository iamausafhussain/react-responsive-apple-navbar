import React, { Component } from "react";
import "./LoginPage.css";
import NameOne from "./NameOne";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "by Default Games",
      name1: "Assasins Creed",
      name2: "Valorant",
      name3: "The Forest",
      name4: "Imposter",
      mount: true,
    };
  }

  setMount = () => {
    console.log("setMount() called");
    this.setState({
      mount: true,
    });
  };

  setUnmount = () => {
    console.log("setUnmount() called");
    this.setState({
      mount: false,
    });
  };

  setChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <main>
          <section className="glass">
            <div className="dashboard">
              <label for="cars">Choose a Game:</label>

              <select
                defaultValue={this.state.name}
                onChange={this.setChange}
                name="cars"
              >
                <option value={this.state.name1}>{this.state.name1}</option>
                <option value={this.state.name2}>{this.state.name2}</option>
                <option value={this.state.name3}>{this.state.name3}</option>
                <option value={this.state.name4}>{this.state.name4}</option>
              </select>
            </div>
            <div className="games">
              <div className="status">
                <h1>Active Games</h1>
                <input placeholder="Search Games" type="text" />
              </div>
              <div className="cards">
                <div className="card">
                  <button onClick={this.setMount} disabled={this.state.mount}>
                    Mount
                  </button>
                  <button
                    onClick={this.setUnmount}
                    disabled={!this.state.mount}
                  >
                    Unmount
                  </button>
                </div>
                <div className="card">
                  {this.state.mount ? <NameOne name={this.state.name} /> : null}
                </div>
                <div className="card">
                  <p>
                    🚀In the console we can see that <br />
                    👉componentDidMount() <br />
                    👉componentDidUpdate() and <br />
                    👉componentWillUnmount()
                    <br /> logged as they are called
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
      </div>
    );
  }
}

export default LoginPage;
