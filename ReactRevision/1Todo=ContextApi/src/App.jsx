import { useState } from "react";
import Heading from "./Component/Heading";
import Input from "./Component/Input";
import ToDoContainer from "./Component/toDoContainer";
import Message from "./Component/Message";
import { TodoContext } from "./Store/ContextStore";

function App() {
  // Set states for the todoData and the checked states:
  let [data, setData] = useState([]);
  let [isCheckedArr, setCheckedArr] = useState([]);

  let getValue = (dataObj) => {
    setData((prevData) => [...prevData, dataObj]);
    setCheckedArr((prev) => [...prev, 0]);
  };

  // Delete the states:
  let deleteIdx = (idx) => {
    if (isCheckedArr[idx] == 0) alert("Your Task Is Not Completed Yet.");
    else {
      let newArr = data.filter((elem, index) => index != idx);
      // console.log(isCheckedArr);
      let newCheckedArr = isCheckedArr.filter((elem, index) => index != idx);

      // console.log(newCheckedArr);
      setData(newArr);
      setCheckedArr(newCheckedArr);
    }
  };
  return (
    <>
      <TodoContext.Provider
        value={{
          data,
          setData,
          isCheckedArr,
          setCheckedArr,
          getValue,
          deleteIdx,
        }}
      >
        <center>
          <Heading />
          <Input />
          <Message />
          <ToDoContainer />
        </center>
      </TodoContext.Provider>
    </>
  );
}

export default App;
