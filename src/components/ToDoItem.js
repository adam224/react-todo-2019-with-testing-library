import React from "react";
import "./ToDoItem.css";

const ToDoItem = (props) => {
  const { item, deleteItem } = props;

  return (
    <li data-testid="todo-item" className="ToDoItem">
      <p data-testid="todo-text" className="ToDoItem-Text">
        {item.text}
      </p>
      <button aria-label={`delete ${item.text}`} data-testid="delete" className="ToDoItem-Delete" onClick={() => deleteItem(item)}>
        -
      </button>
    </li>
  );
};

export default ToDoItem;
