import { useRef } from "react";

function Todolist({ ongetData }) {
  // Updation = We used "useRef" hook instead of "useState" hook.
  let newEnterTask = useRef();
  let newEnterTaskDate = useRef();

  return (
    <div className="container">
      <div className="row">
        <div className="col col-5">
          <input
            type="text"
            placeholder="Enter Task Here:"
            ref={newEnterTask}
          />
        </div>
        <div className="col col-4">
          <input
            type="date"
            placeholder="Enter Task Date:"
            ref={newEnterTaskDate}
          />
        </div>
        <div className="col col-3">
          <button
            className="btn btn-success"
            onClick={() => {
              if (
                newEnterTask.current.value != "" &&
                newEnterTaskDate.current.value != ""
              ) {
                ongetData(
                  newEnterTask.current.value,
                  newEnterTaskDate.current.value
                );
                newEnterTask.current.value = "";
                newEnterTaskDate.current.value = "";
              } else {
                window.alert("Please enter full details.");
              }
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
