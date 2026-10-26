import Heading from "./Components/Heading";
import Todolist from "./Components/Todo";
import Lists from "./Components/lists.jsx";
import "./App.css";
import { useState } from "react";
import Message from "./Components/Message.jsx";

function App() {
  const [toDoDataArr, setToDoDataArr] = useState([]);

  let getDataHandler = (newTask, newDueDate) => {
    console.log(newTask, newDueDate);

    // Updation = We use "functional updates" method to change the state of the "toDoDataArr" array.

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
    <div className="parentContainer">
      <Heading></Heading>
      <Todolist ongetData={getDataHandler}></Todolist>
      <Message dataArr={toDoDataArr}></Message>
      <Lists tasks={toDoDataArr} onDeleteIndex={getDeleteIndex}></Lists>
    </div>
  );
}

export default App;
