import { createContext } from "react";
import { useReducer, useState } from "react";

export const TodoContext = createContext({
  data: [],
  setData: () => {},
  isCheckedArr: [],
  setCheckedArr: () => {},
  getValue: () => {},
  deleteIdx: () => {},
});

function dataHandle(prevState, action) {
  let newState = prevState;
  if (action.type == "ADD_ITEM") {
    newState = [...prevState, action.payload.dataObj];
  } else {
    newState = prevState.filter((elem, index) => index != action.payload.idx);
  }
  return newState;
}

const TodoContextProvider = ({ children }) => {
  const [data, dataDispatch] = useReducer(dataHandle, []);

  // Set states for the todoData and the checked states:
  // let [data, setData] = useState([]);
  let [isCheckedArr, setCheckedArr] = useState([]);

  let getValue = (dataObj) => {
    const addActionObj = {
      type: "ADD_ITEM",
      payload: {
        dataObj,
      },
    };
    dataDispatch(addActionObj);
    setCheckedArr((prev) => [...prev, 0]);
  };

  // Delete the states:
  let deleteIdx = (idx) => {
    if (isCheckedArr[idx] == 0) alert("Your Task Is Not Completed Yet.");
    else {
      const deleteAction = {
        type: "DELETE_ITEM",
        payload: {
          idx,
        },
      };
      dataDispatch(deleteAction);

      let newCheckedArr = isCheckedArr.filter((elem, index) => index != idx);
      setCheckedArr(newCheckedArr);
    }
  };

  return (
    <>
      <TodoContext.Provider
        value={{
          data,
          isCheckedArr,
          setCheckedArr,
          getValue,
          deleteIdx,
        }}
      >
        {children}
      </TodoContext.Provider>
    </>
  );
};

export default TodoContextProvider;
