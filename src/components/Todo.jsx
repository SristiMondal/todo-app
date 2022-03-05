import React, { useState } from "react";
import TodoList from "./TodoList";
import "../styles/todo.css";

const Todo = () => {
  const [InputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const ListOfItems = (event) => {
    if (InputList !== '' && InputList.match(/\S/)) {
        setItems((olditems) => {
            setInputList("");
            return [...olditems, InputList];
          });
    }  
  };
  const AddEnter = (event) => {
    if (event.key === "Enter") {
      ListOfItems(event);
    }
  };

  const deleteItems = (id) => {
    setItems((olditems) => {
      return olditems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="Main_div">
      <div className="Center_div">
        <br />
        <h1>To Do List</h1>
        <br />
        <div className="unwanted">
          <input
            type="text"
            placeholder="Add an item"
            onChange={itemEvent}
            value={InputList}
            onKeyPress={AddEnter}
          />
          <button
            onClick={ListOfItems}
            disabled={InputList === "" ? true : false}
            className="buttonHover"
          >
            +
          </button>
        </div>

        <div className="listItems">
          {Items.map((itemVal, index) => {
            return (
              <TodoList
                key={index}
                id={index}
                text={itemVal}
                onSelect={deleteItems}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
