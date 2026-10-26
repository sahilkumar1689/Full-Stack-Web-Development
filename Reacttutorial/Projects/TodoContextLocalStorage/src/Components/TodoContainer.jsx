import React, { useContext } from "react";
import TodoItems from "./TodoItems";
import { TodoContextStore } from "../Storage/contextStore";

function TodoContainer() {
  const { todoArr } = useContext(TodoContextStore);
  return (
    <div className="todoContainer">
      {todoArr.length === 0 ? (
        <p>Hurry,No Work To Do.</p>
      ) : (
        todoArr.map((elem) => {
          return <TodoItems key={elem.id} todoObj={elem} />;
        })
      )}
    </div>
  );
}

export default TodoContainer;
