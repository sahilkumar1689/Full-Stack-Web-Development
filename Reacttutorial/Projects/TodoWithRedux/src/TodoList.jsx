import Buttons from "./Buttons.jsx";
import Heading from "./Heading.jsx";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {TodolistActions} from "./ReduxStore/store.js";


const TodoList = ()=>{
	const dispatch = useDispatch();
	const todoList = useSelector(store=>store.todoList);
	console.log(todoList);

	return (
		<>
		<center>
			
			<Heading/>
        <Buttons/>
        <table class="table table-light table-hover w-50 m-5">
  			<thead>
  				<tr>
  					<th>#</th>
  					<th>ToDo Name</th>
  					<th>Date</th>
  					<th>Action</th>
  				</tr>
  			</thead>
  			<tbody>
  			{
  				todoList.length === 0 ? <tr><td colspan="4"><p style={{margin:"120px",fontSize:"25px",color:"lightgrey"}}>Your Task List Is Empty , No Task To Show.</p></td></tr>:(
  					todoList.map((elem,idx)=>{
  						return (
  							<tr key={idx}>
  								<td>{idx+1}</td>
  								<td>{elem.name}</td>
  								<td>{elem.date}</td>
  								<td><button className="btn btn-danger" onClick={()=>dispatch(TodolistActions.delete(idx))}>Delete</button></td>
  							</tr>
  						)
  					})
  				)
  			}
  				
  			</tbody>
		</table>
		</center>
			
		</>
	)
}

export default TodoList;