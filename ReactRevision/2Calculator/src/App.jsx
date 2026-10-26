import { useRef } from "react";
import "./app.css";
import Btn from "./Btn";

function App() {
  let dataBtn = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "=",
    ".",
  ];

  let inputVal = useRef();

  let getBtnValue = (event) => {
    let btnValue = event.target.innerText;
    if (btnValue == "=") {
      inputVal.current.value = eval(inputVal.current.value);
    } else if (btnValue == "C") {
      inputVal.current.value = "";
    } else {
      inputVal.current.value += btnValue;
    }
  };

  return (
    <>
      <div className="container">
        <input type="text" ref={inputVal} disabled />
        <Btn dataBtn={dataBtn} getBtnValue={getBtnValue} />
      </div>
    </>
  );
}

export default App;
