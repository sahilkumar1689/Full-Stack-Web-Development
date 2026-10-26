import Heading from "./Components/Heading";
import Todolist from "./Components/Todo";
import Lists from "./Components/lists.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const [toDoDataArr, setToDoDataArr] = useState([]);

  let getDataHandler = (newTask, newDueDate) => {
    console.log(newTask, newDueDate);
    setToDoDataArr([...toDoDataArr, { name: newTask, date: newDueDate }]);
  };

  let getDeleteIndex = (index) => {
    console.log(index);
    // First Method:
    let newArr = toDoDataArr.filter((elem, indexes) => indexes != index);
    console.log(newArr);
    setToDoDataArr([...newArr]);

    // Second Method:
    // toDoDataArr.splice(index, 1);
    // console.log(toDoDataArr);
    // setToDoDataArr([...toDoDataArr]);
  };
  return (
    <div className="parentContainer">
      <Heading></Heading>
      <Todolist ongetData={getDataHandler}></Todolist>
      {toDoDataArr.length == 0 && (
        <p className="emptyMessage">No Work Left Enjoy Yourday.</p>
      )}
      <Lists tasks={toDoDataArr} onDeleteIndex={getDeleteIndex}></Lists>
    </div>
  );
}

export default App;
