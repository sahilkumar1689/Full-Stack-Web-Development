import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  // It is used to create the subscription from the store and return the complete store object.
  const counterValue = useSelector((storage) => storage.counter);
  // It is used to dispatch the action:
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "Increment" });
  };

  const decrement = () => {
    dispatch({ type: "Decrement" });
  };

  return (
    <>
      <p>Counter Value:{counterValue}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
