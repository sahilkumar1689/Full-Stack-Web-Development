import { memo } from "react";

function Navbar({ headingCount, setCount }) {
  console.log("Navbar Rerender.");
  return (
    <>
      <h1>Heading: {headingCount}</h1>
      <button onClick={setCount}>click me</button>
    </>
  );
}
export default memo(Navbar);
