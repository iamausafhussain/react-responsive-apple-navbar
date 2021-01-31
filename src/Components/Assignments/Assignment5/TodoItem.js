import React, { Component } from "react";
import "./component.css";

class TodoItem extends Component {
  onMarkItemComplete = () => {
    this.props.markItemComplete(this.props.id);
  };

  onDeleteItem = () => {
    this.props.deleteItem(this.props.id);
  };

  render() {
    const itemClass =
      "isItemCompleted-" + (this.props.status ? "done" : "undone");
    return (
      <div>
        <input type="checkbox" onchange={this.onMarkItemComplete} />
        <span className={itemClass}> {this.props.task} </span>
        <button
          style={{ float: "right", marginTop: "-4px" }}
          type="button"
          className="TodoItem__button"
          onclick={this.onDeleteItem}
        >
          x
        </button>
      </div>
    );
  }
}

export default TodoItem;
