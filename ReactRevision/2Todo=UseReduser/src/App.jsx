import Heading from "./Component/Heading";
import Input from "./Component/Input";
import ToDoContainer from "./Component/toDoContainer";
import Message from "./Component/Message";
import TodoContextProvider from "./Store/ContextStore";

function App() {
  return (
    <>
      <TodoContextProvider>
        <center>
          <Heading />
          <Input />
          <Message />
          <ToDoContainer />
        </center>
      </TodoContextProvider>
    </>
  );
}

export default App;
