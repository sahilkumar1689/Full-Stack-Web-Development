import React from "react";
import { useSelector } from "react-redux";

function Heading() {
  const { counterVal } = useSelector((store) => store.counter);

  return <div>CounterValue:{counterVal}</div>;
}

export default Heading;
