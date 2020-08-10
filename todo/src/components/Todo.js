import React from "react";

const Todo = props => {
  return (
    <div
      onClick={() => props.toggleItem(props.item.id)}
      className={`task${props.item.completed ? " completed" : ""}`}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Todo;