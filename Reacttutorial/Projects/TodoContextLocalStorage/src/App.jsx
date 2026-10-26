import React from "react";
import TodoInput from "./Components/TodoInput";
import TodoContainer from "./Components/TodoContainer";

function App() {
  return (
    <div className="container">
      <TodoInput />
      <TodoContainer />
    </div>
  );
}

export default App;
