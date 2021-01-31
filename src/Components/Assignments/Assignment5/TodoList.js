import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "./component.css";

class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.items.map((item) => (
          <TodoItem
            id={item.id}
            state={item.status}
            task={item.task}
            deleteItem={this.props.deleteItem}
            markItemComplete={this.props.markItemComplete}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
