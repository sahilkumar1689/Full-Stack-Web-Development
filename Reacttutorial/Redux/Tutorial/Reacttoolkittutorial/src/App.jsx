import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./Store/Counter";

function App() {
  // It is used to get the inital state of the particular slice.You only need to do "storage.name of the slice" after that they return the initalState.
  const { count } = useSelector((storage) => storage.counter);
  // It is used to dispatch the action:
  const dispatch = useDispatch();

  const increment = () => {
    // You no need to create any actions.You directly call the create actions.You can also pass the payload inside the action function id necessary.But you need to catch that value using action parameter in the slice defination.
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <>
      <p>Counter Value:{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
