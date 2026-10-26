import React from "react";
import { useSelector } from "react-redux";

function Heading() {
  const counter = useSelector((store) => store.counter);

  return <div>CounterValue:{counter}</div>;
}

export default Heading;
