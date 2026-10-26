import { createContext, useReducer } from "react";
import { useState } from "react";

export const TodoContextStore = createContext({
  dataArr: [],
  setNewData: () => {},
  deleteData: () => {},
});

function reducerFunction(currentState, action) {
  let newStateArr = currentState;
  if (action.type == "Add_New_Item") {
    newStateArr = [
      ...currentState,
      { name: action.data.task, date: action.data.date },
    ];
  } else if (action.type == "Delete_Item") {
    let newArr = newStateArr.filter(
      (elem, indexes) => indexes != action.data.deleteIndex
    );
    console.log(newArr);
    newStateArr = [...newArr];
  }
  return newStateArr;
}

function Container({ children }) {
  // const [toDoDataArr, setToDoDataArr] = useState([]);
  const [toDoDataArr, customSetToDoData] = useReducer(reducerFunction, []);

  let getDataHandler = (newTask, newDueDate) => {
    console.log(newTask, newDueDate);

    const action = {
      type: "Add_New_Item",
      data: {
        task: newTask,
        date: newDueDate,
      },
    };

    customSetToDoData(action);
  };

  let getDeleteIndex = (index) => {
    console.log(index);

    const action = {
      type: "Delete_Item",
      data: {
        deleteIndex: index,
      },
    };

    customSetToDoData(action);
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
