import { createContext } from "react";
import { useState } from "react";

export const TodoContextStore = createContext({
  dataArr: [],
  setNewData: () => {},
  deleteData: () => {},
});

function Container({ children }) {
  const [toDoDataArr, setToDoDataArr] = useState([]);

  let getDataHandler = (newTask, newDueDate) => {
    console.log(newTask, newDueDate);

    setToDoDataArr((currentState) => [
      ...currentState,
      { name: newTask, date: newDueDate },
    ]);
  };

  let getDeleteIndex = (index) => {
    console.log(index);
    let newArr = toDoDataArr.filter((elem, indexes) => indexes != index);
    console.log(newArr);
    setToDoDataArr([...newArr]);
  };

  return (
    <TodoContextStore.Provider
      value={{
        dataArr: toDoDataArr,
        setNewData: getDataHandler,
        deleteData: getDeleteIndex,
      }}
    >
      {children}
    </TodoContextStore.Provider>
  );
}

export default Container;
