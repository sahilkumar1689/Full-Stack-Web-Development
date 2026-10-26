import {useRef} from "react";
import {useDispatch} from "react-redux";
import {TodolistActions} from "./ReduxStore/store.js";


const Input = ()=>{

  const dispatch = useDispatch();


  const todoName = useRef();
  const todoDate = useRef();

  const todoData = ()=>{
    if(todoName.current.value !== "" && todoDate.current.value !== "" ){

      let todoObj = {
        name:todoName.current.value,
        date:todoDate.current.value
      }
      todoName.current.value = "";
      todoDate.current.value = "";

      dispatch(TodolistActions.add(todoObj));
      alert("Data Added Successfully");
    }
    else alert("Please Enter Some Todo Task");
  }


	return (
		<>
			<div className="row mt-5" style={{ width: "40%" }}>
        <div className="col-4">
          <input type="text" placeholder="Enter Task" ref={todoName}  />
        </div>
        <div className="col-4">
          <input type="date" placeholder="DD-MM-YYYY" ref={todoDate} />
        </div>
        <div className="col-4">
          <button className="btn btn-primary" onClick={todoData}>
            Add
          </button>
        </div>
      </div>

		</>
		)
}

export default Input;