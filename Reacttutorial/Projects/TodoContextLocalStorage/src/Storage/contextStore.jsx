import { createContext, useEffect, useState } from "react";

export const TodoContextStore = createContext({
  todoArr: [],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toogleTodo: () => {},
});

function TodoProvider({ children }) {
  const [todoArr, setTodoArr] = useState([]);

  // Try to handle the local Storage:
  useEffect(() => {
    let localArr = JSON.parse(localStorage.getItem("todoArr")) || [];
    if (localArr.length > 0) setTodoArr([...localArr]);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoArr", JSON.stringify(todoArr));
  }, [todoArr]);

  // Todo Array Functions:
  const addTodo = (todoName) => {
    let newObj = {
      id: Date.now(),
      todoName,
      isChecked: false,
    };
    setTodoArr((prev) => [newObj, ...prev]);
  };
  // console.log(todoArr);

  const toogleTodo = (toggleId) => {
    setTodoArr((prev) => {
      let newObj = prev;
      newObj = newObj.map((elem) =>
        elem.id === toggleId
          ? { ...elem, isChecked: elem.isChecked ? false : true }
          : elem
      );
      return newObj;
    });
  };

  const deleteTodo = (deleteId) => {
    setTodoArr((prev) => {
      let newObj = prev;
      newObj = prev.filter((elem) => elem.id !== deleteId);
      return newObj;
    });
  };

  const updateTodo = (newTodo, id) => {
    setTodoArr((prev) => {
      let newObj = prev;
      newObj = prev.map((elem) =>
        elem.id === id ? { ...prev, todoName: newTodo } : elem
      );
      return newObj;
    });
  };

  return (
    <>
      <TodoContextStore.Provider
        value={{
          todoArr,
          addTodo,
          toogleTodo,
          deleteTodo,
          updateTodo,
        }}
      >
        {children}
      </TodoContextStore.Provider>
    </>
  );
}

export default TodoProvider;
