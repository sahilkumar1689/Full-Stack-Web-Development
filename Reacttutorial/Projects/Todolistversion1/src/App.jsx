import Heading from "./Components/Heading";
import Todolist from "./Components/Todo";
import List1 from "./Components/list1.jsx";
import List2 from "./Components/list2.jsx";
import "./App.css";

function App() {
  return (
    <div className="parentContainer">
      <Heading></Heading>
      <Todolist></Todolist>
      <List1></List1>
      <List2></List2>
    </div>
  );
}

export default App;
