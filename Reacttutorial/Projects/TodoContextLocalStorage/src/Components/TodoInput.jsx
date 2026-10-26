import React, { useContext } from "react";
import { useRef } from "react";
import { TodoContextStore } from "../Storage/contextStore";

function TodoInput() {
  const todoVal = useRef();

  const { addTodo } = useContext(TodoContextStore);

  return (
    <div className="inputContainer">
      <h1>Enter Your Todo's</h1>
      <div className="inputForm">
        <input type="text" placeholder="Enter Todo's" ref={todoVal} />
        <button
          onClick={() => {
            addTodo(todoVal.current.value);
            todoVal.current.value = "";
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
