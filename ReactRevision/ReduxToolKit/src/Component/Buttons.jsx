import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions, messageActions } from "../../Store";

function Buttons() {
  const dispatch = useDispatch();

  let inputVal = useRef();

  return (
    <div>
      <button onClick={() => dispatch(counterActions.inc())}>Increment</button>
      <button onClick={() => dispatch(counterActions.dec())}>Decrement</button>
      <input type="text" ref={inputVal} />
      <button
        onClick={() => {
          dispatch(counterActions.add(Number(inputVal.current.value)));
          inputVal.current.value = "";
        }}
      >
        Addition
      </button>
      <button
        onClick={() => {
          dispatch(counterActions.sub(Number(inputVal.current.value)));
          inputVal.current.value = "";
        }}
      >
        Subtract
      </button>
      <button
        onClick={() => {
          dispatch(messageActions.toggle());
        }}
      >
        Toggle
      </button>
    </div>
  );
}

export default Buttons;
