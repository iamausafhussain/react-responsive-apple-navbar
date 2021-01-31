import React, { Component } from "react";
import "./ajaxCalls.css";
import Button from "@material-ui/core/Button";

class FetchAPI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "",
    };
  }

  handleRefresh = () => {
    window.location.reload(true);
  };

  componentDidMount() {
    fetch("http://www.colr.org/json/color/random")
      .then((res) => res.json())
      .then((data) => {
        let newColor = `#${data.new_color}`;
        console.log(newColor);
        this.setState({
          color: newColor,
        });
      });
  }
  render() {
    return (
      <div>
        <div>
          <main>
            <section className="glass">
              <div className="dashboard">
                <label for="cars">🚀API Fetcher:</label>
              </div>
              <div className="games">
                <div className="status">
                  <h1>API calls</h1>
                  <input placeholder="Search fetcher " type="text" />
                </div>
                <div className="cards">
                  <div
                    style={{ backgroundColor: `${this.state.color}` }}
                    className="card"
                  ></div>
                  <div className="card">
                    <Button onClick={this.handleRefresh} variant="contained">
                      Add
                    </Button>
                  </div>
                  <div className="card">
                    <p>
                      <span>{this.state.color}</span> is rendered using colr.org
                      API call the above container changes color in-each
                      rendering of the API.
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
      </div>
    );
  }
}

export default FetchAPI;
