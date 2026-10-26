import { createContext, useReducer, useState, useEffect } from "react";

export const DataStorage = createContext({
  postDataArr: [],
  addData: () => {},
  deleteData: () => {},
  setServerData: () => {},
  scrollerState: false,
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
  } else if (action.type == "Set_Server_Data") {
    newState = [...action.data.serverArr];
  }
  return newState;
}

function DataProvider({ children }) {
  let dummyData = [
    {
      title: "Going For Vaccation ffslakfalkal",
      email: "sahilKumar@gmail.com",
      content: "I am going for the vacation very excited.",
      hashtags: ["#Vacations", "#Enjoying", "#Mumbai"],
    },
    {
      title: "Going For Vaccation",
      email: "sahilKumar@gmail.com",
      content: "I am going for the vacation very excited.",
      hashtags: ["#Vacations", "#Enjoying", "#Mumbai"],
    },
  ];
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

  // Fetching data from the dummy api's:
  let [scrollerState, setScrollerState] = useState(false);

  useEffect(() => {
    setScrollerState(true);

    const controll = new AbortController();
    const signal = controll.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        setServerData(data.posts);
        setScrollerState(false);
      });

    // (async () => {
    //   setScrollerState(true);
    //   let response = await fetch("https://dummyjson.com/posts", { signal });
    //   let data = await response.json();
    //   // console.log(data.posts);
    //   setServerData(data.posts);
    //   // setServerData([]);
    //   setScrollerState(false);
    // })();

    return () => {
      console.log("Cleaning up.");
      controll.abort();
    };
  }, []);

  return (
    <>
      <DataStorage.Provider
        value={{
          postDataArr,
          addNewData,
          deleteData,
          setServerData,
          scrollerState,
        }}
      >
        {children}
      </DataStorage.Provider>
    </>
  );
}

export default DataProvider;
