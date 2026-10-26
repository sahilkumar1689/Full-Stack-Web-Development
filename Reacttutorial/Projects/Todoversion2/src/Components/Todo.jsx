import { useState } from "react";

function Todolist({ ongetData }) {
  let [newEnterTask, setNewEnterTask] = useState("");
  let [newEnterTaskDate, setNewEnterTaskDate] = useState("");

  let getNewTask = (details) => {
    setNewEnterTask(details.target.value);
  };
  let getNewTaskDate = (details) => {
    setNewEnterTaskDate(details.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col col-5">
          <input
            type="text"
            placeholder="Enter Task Here:"
            value={newEnterTask}
            onChange={getNewTask}
          />
        </div>
        <div className="col col-4">
          <input
            type="date"
            placeholder="Enter Task Date:"
            value={newEnterTaskDate}
            onChange={getNewTaskDate}
          />
        </div>
        <div className="col col-3">
          <button
            className="btn btn-success"
            onClick={() => {
              if (newEnterTask != "" && newEnterTaskDate != "") {
                ongetData(newEnterTask, newEnterTaskDate);
              } else {
                window.alert("Please enter full details.");
              }
              setNewEnterTask("");
              setNewEnterTaskDate("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todolist;
