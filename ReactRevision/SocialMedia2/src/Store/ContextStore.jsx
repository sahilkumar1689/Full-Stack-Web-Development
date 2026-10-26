import React, { useEffect, useReducer, useState } from "react";
import { createContext } from "react";

export const postContext = createContext({
  postData: [],
  addPostData: () => {},
  deletePostData: () => {},
  setServerData: () => {},
  scrollerState: null,
  setScrollerState: () => {},
});

function postUpdateFunction(prevState, action) {
  let newState = prevState;
  if (action.title === "Add_Server_Data") {
    newState = [...action.payload.newData];
  } else if (action.title === "Add_User_Data") {
    newState = [action.payload.newobj, ...prevState];
  } else {
    newState = prevState.filter((_, idx) => idx != action.payload.deleteIdx);
  }
  return newState;
}

function ContextStore({ children }) {
  const [scrollerState, setScrollerState] = useState(0);
  const [postData, postDispatch] = useReducer(postUpdateFunction, []);

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   setScrollerState(1);

  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setServerData(data.posts);
  //       setScrollerState(0);
  //     });

  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  const addPostData = (newobj) => {
    const actionObj = {
      title: "Add_User_Data",
      payload: {
        newobj,
      },
    };

    postDispatch(actionObj);
  };

  const deletePostData = (deleteIdx) => {
    const actionObj = {
      title: "Delete_Data",
      payload: {
        deleteIdx,
      },
    };

    postDispatch(actionObj);
  };

  const setServerData = (newData) => {
    const actionObj = {
      title: "Add_Server_Data",
      payload: {
        newData,
      },
    };

    postDispatch(actionObj);
  };

  return (
    <postContext.Provider
      value={{
        postData,
        addPostData,
        deletePostData,
        setServerData,
        scrollerState,
        setScrollerState,
      }}
    >
      {children}
    </postContext.Provider>
  );
}

export default ContextStore;
