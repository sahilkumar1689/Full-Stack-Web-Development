import Heading from "./Components/Heading";
import Todolist from "./Components/Todo";
import Lists from "./Components/lists.jsx";
import "./App.css";
import Message from "./Components/Message.jsx";
import Container from "./Store/Tododatastore.jsx";

function App() {
  return (
    // Updation = Use context api method to handle the state of toDoDataArr and to separate the UI and bussiness logic.

    <Container>
      <div className="parentContainer">
        <Heading></Heading>
        <Todolist></Todolist>
        <Message></Message>
        <Lists></Lists>
      </div>
    </Container>
  );
}

export default App;
