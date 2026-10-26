import { createContext, useReducer } from "react";

export const DataStorage = createContext({
  postDataArr: [],
  addData: () => {},
  deleteData: () => {},
});

function reducer(currentState, action) {
  let newState = currentState;
  if (action.type == "Add_Items") {
    let newEntry = {
      title: action.data.newEntry.title,
      reactions: action.data.newEntry.reactions,
      body: action.data.newEntry.body,
      tags: action.data.newEntry.tags,
    };
    newState = [newEntry, ...currentState];
  } else if (action.type == "Delete_Items") {
    newState = currentState.filter(
      (_, ElementIndex) => ElementIndex !== action.data.dIndex
    );
  }
  return newState;
}

function DataProvider({ children }) {
  const [postDataArr, setPostData] = useReducer(reducer, []);

  let addNewData = (newData) => {
    const action = {
      type: "Add_Items",
      data: {
        newEntry: newData,
      },
    };
    setPostData(action);
  };

  let deleteData = (deleteIndex) => {
    const action = {
      type: "Delete_Items",
      data: {
        dIndex: deleteIndex,
      },
    };
    setPostData(action);
  };

  return (
    <>
      <DataStorage.Provider
        value={{
          postDataArr,
          addNewData,
          deleteData,
        }}
      >
        {children}
      </DataStorage.Provider>
    </>
  );
}

export default DataProvider;
