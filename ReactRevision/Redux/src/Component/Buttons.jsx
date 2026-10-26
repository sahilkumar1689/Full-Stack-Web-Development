import React, { useRef } from "react";
import { useDispatch } from "react-redux";

function Buttons() {
  const dispatch = useDispatch();

  let inputVal = useRef();

  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT",
          })
        }
      >
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <input type="text" ref={inputVal} />
      <button
        onClick={() => {
          dispatch({
            type: "ADDITION",
            payload: {
              add: Number(inputVal.current.value),
            },
          });
          inputVal.current.value = "";
        }}
      >
        Addition
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "SUBTRACTION",
            payload: {
              sub: Number(inputVal.current.value),
            },
          });
          inputVal.current.value = "";
        }}
      >
        Subtract
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Toggle" });
        }}
      >
        Toggle
      </button>
    </div>
  );
}

export default Buttons;
