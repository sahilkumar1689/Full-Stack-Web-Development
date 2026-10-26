import React, { useContext, useState } from "react";
import { TodoContextStore } from "../Storage/contextStore";

function TodoItems({ todoObj }) {
  const { toogleTodo, deleteTodo, updateTodo } = useContext(TodoContextStore);
  const [isEdit, setIsEdit] = useState(false);
  const [newTodo, setNewTodo] = useState(todoObj.todoName);
  return (
    <div className="todoItem">
      <div className="todoNameContainer">
        <input
          type="checkbox"
          checked={todoObj.isChecked}
          onClick={() => {
            toogleTodo(todoObj.id);
          }}
          readOnly
        />
        <input
          type="text"
          value={newTodo}
          readOnly={isEdit ? false : true}
          onChange={(e) => setNewTodo(e.target.value)}
          className={`editInput ${todoObj.isChecked ? "lineThrough" : ""}${
            isEdit ? "borderEdit" : ""
          }`}
        />
      </div>
      <div className="btnContainer">
        {isEdit ? (
          <button
            onClick={() => {
              setIsEdit(false);
              updateTodo(newTodo, todoObj.id);
            }}
          >
            save
          </button>
        ) : (
          <button disabled={todoObj.isChecked} onClick={() => setIsEdit(true)}>
            Edit
          </button>
        )}
        <button
          onClick={() => {
            if (!todoObj.isChecked) alert("Work Is Pending.");
            else deleteTodo(todoObj.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItems;
