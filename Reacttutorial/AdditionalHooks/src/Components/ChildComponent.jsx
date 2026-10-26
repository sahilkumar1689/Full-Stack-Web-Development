import React, { memo } from "react";

function ChildComponent({ tempMsg, tempFun }) {
  console.log("Child Rendered");
  return (
    <>
      <button onClick={tempFun}>{tempMsg}</button>;
    </>
  );
}

export default memo(ChildComponent);
