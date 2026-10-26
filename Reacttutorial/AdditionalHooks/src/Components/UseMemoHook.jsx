import React, { useMemo, useState } from "react";

function UseMemoHook() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  // UseMemo hook use when you need to memoize the values, it means suppose there is a senario where a complex/expensive calculation only depend upon the value but that value hardly changes in the case instead to render it continously we wrap that function inside the useMemo hook and passes the hardly changed value refrence.So that it run the function only when the value changes.
  const expData = useMemo(() => {
    for (let i = 0; i < 1000000000; i++);
    return inputValue * 2;
  }, [inputValue]);
  return (
    <>
      <button onClick={() => setCounter((prev) => prev + 1)}>Click</button>
      <p>Counter: {counter}</p>
      <input
        type="number"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <p>InputValue:{expData}</p>
    </>
  );
}

export default UseMemoHook;
