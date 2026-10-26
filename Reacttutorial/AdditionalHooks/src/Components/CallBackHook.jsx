import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";
import { set } from "react-hook-form";

function CallBackHook() {
  const [counter, setCounter] = useState(0);

  // We know that the memo() function render the component only when the props changes but if the function passes as the prop then memo function cannot able to control the continous render because every time when parent rerenders the function refrences changes, that why the memo() feels the props value changes so they render the component,so inorder to prevent that you need to wrap that function inside the useCallback it cache the function refrence it means it frezee the function refrence.
  const handleClick = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  return (
    <>
      <button onClick={() => setCounter((prev) => prev + 1)}>Counter</button>
      <p>Counter:{counter}</p>

      <ChildComponent tempMsg="ChildComponent" tempFun={handleClick} />
    </>
  );
}

export default CallBackHook;
