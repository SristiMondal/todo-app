import React from "react";

const TodoList = (props) => {
  return (
      <div className="todo_style">
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></i>
        <div className="item"> {props.text} </div>
      </div>
  );
};

export default TodoList;
