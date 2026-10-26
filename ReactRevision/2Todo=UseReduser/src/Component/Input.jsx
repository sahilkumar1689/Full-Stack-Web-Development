import React, { useContext, useRef } from "react";
import { TodoContext } from "../Store/ContextStore";

function Input() {
  // Get Function from the Context Api:
  const { getValue } = useContext(TodoContext);

  let inputValue = useRef();
  let dateValue = useRef();

  function setValue() {
    if (inputValue.current.value != "" && dateValue.current.value != "") {
      let obj = {
        name: inputValue.current.value,
        date: dateValue.current.value,
      };
      inputValue.current.value = "";
      dateValue.current.value = "";
      getValue(obj);
    } else alert("Enter Some ToDo.");
  }

  return (
    <>
      <div className="row" style={{ width: "40%" }}>
        <div className="col-4">
          <input type="text" placeholder="Enter Task" ref={inputValue} />
        </div>
        <div className="col-4">
          <input type="date" placeholder="DD-MM-YYYY" ref={dateValue} />
        </div>
        <div className="col-4">
          <button className="btn btn-primary" onClick={setValue}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default Input;
