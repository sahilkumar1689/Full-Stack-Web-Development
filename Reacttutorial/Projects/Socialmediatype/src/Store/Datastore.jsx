import { createContext, useReducer } from "react";

export const DataStorage = createContext({
  postDataArr: [],
  addData: () => {},
  deleteData: () => {},
  setServerData: () => {},
});

function reducer(currentState, action) {
  let newState = currentState;
  if (action.type == "Add_Items") {
    let newEntry = {
      title: action.data.title,
      reactions: action.data.reactions,
      body: action.data.body,
      tags: action.data.tags,
    };
    newState = [newEntry, ...currentState];
  } else if (action.type == "Delete_Items") {
    newState = currentState.filter(
      (elem, ElementIndex) => ElementIndex !== action.data.dIndex
    );
  } else if (action.type == "Set_Server_Data") {
    newState = [...action.data.serverArr];
  }
  return newState;
}

function DataProvider({ children }) {
  let dummyData = [
    {
      title: "Going For Vaccation ffslakfalkal",
      body: "I am going for the vacation very excited.",
      tags: ["#Vacations", "#Enjoying", "#Mumbai"],
    },
    {
      title: "His mother had always taught him",
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      tags: ["history", "american", "crime"],
    },
    {
      title: "Going For Vaccation",
      body: "I am going for the vacation very excited.",
      tags: ["#Vacations", "#Enjoying", "#Mumbai"],
    },
  ];

  const [postDataArr, setPostData] = useReducer(reducer, []);

  let addNewData = (newTitle, newReactions, newHashtags, newContent) => {
    const action = {
      type: "Add_Items",
      data: {
        title: newTitle,
        reactions: newReactions,
        tags: newHashtags.split(" "),
        body: newContent,
      },
    };
    setPostData(action);
  };

  let setServerData = (dataArr) => {
    const action = {
      type: "Set_Server_Data",
      data: {
        serverArr: dataArr,
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
        value={{ postDataArr, addNewData, deleteData, setServerData }}
      >
        {children}
      </DataStorage.Provider>
    </>
  );
}

export default DataProvider;
