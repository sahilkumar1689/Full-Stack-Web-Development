import { useRef } from "react";
import zustandStore from "./Store/index";

function App() {
  const inputValue = useRef();

  // You can simple access the counter value and the action directly , inside the store we simply get the complete object , after that we can destructure any thing we want.
  const {
    counter,
    add,
    decrease,
    addUserValue,
    deleteUserValue,
    isShowMessage,
    setMessageState,
  } = zustandStore((store) => store);
  return (
    <>
      {isShowMessage ? <p>No Thing To Show</p> : <h1>{counter}</h1>}
      <button onClick={add}>+</button>
      <button onClick={decrease}>-</button>
      <input type="number" ref={inputValue} />
      <button
        onClick={() => {
          addUserValue(Number(inputValue.current.value));
          inputValue.current.value = "";
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          deleteUserValue(Number(inputValue.current.value));
          inputValue.current.value = "";
        }}
      >
        Delete
      </button>
      <button onClick={setMessageState}>Show/Hide</button>
    </>
  );
}

export default App;
