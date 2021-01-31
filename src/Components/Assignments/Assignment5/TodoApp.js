import React, { Component } from "react";
import "./todoApp.css";
import TodoList from "./TodoList";

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      items: [],
    };
  }

  handleInput = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleAddItem = (event) => {
    event.preventDefault();

    if (this.state.value === "") return;

    const newItem = {
      task: this.state.value,
      id: Date.now(),
      status: false,
    };

    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      value: "",
    }));
  };

  handleDeleteItem = (itemId) => {
    const updatedItems = this.state.items.filter((item) => {
      return item.id !== itemId;
    });

    this.setState({
      items: [].concat(updatedItems),
    });
  };

  handleMarkItemComplete = (itemId) => {
    const updatedItems = this.state.items.map((item) => {
      if (itemId === item.id) item.status = !item.status;

      return item;
    });

    this.setState({
      items: [].concat(updatedItems),
    });
  };

  render() {
    return (
      <div>
        <main>
          <section className="glass">
            <div className="dashboard">
              <label for="cars">🚀TODO List</label>
              <input
                className="input__style"
                type="input"
                placeholder="Add New Todo"
                onChange={this.handleInput}
                value={this.state.value}
              />
              <button
                type="button"
                className="button__style"
                onclick={this.handleAddItem}
              >
                Add
              </button>
            </div>
            <div className="games">
              <div className="status">
                <h1>TODO List</h1>
                <input placeholder="Search Todo " type="text" />
              </div>
              <div className="cards">
                <div className="card">
                  <TodoList
                    items={this.state.items}
                    deleteItem={this.handleDeleteItem}
                    markItemComplete={this.handleMarkItemComplete}
                  />
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

export default TodoApp;
