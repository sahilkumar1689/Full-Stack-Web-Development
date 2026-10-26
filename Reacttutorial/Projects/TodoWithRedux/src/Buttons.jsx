import {useNavigate} from "react-router-dom";


const Buttons = ()=>{
	const navigate = useNavigate();
	return (
		<>
			 <div className="btnContainer">
        		<button class="btn btn-success m-2" onClick={()=>navigate("/")}>Add Tasks</button>
        		<button className="btn btn-primary" onClick={()=>navigate("/todoList")}>See My Task</button>
      		</div>

		</>
		)
}
export default Buttons;