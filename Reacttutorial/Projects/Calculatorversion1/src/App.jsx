import Input from "./Components/Input";
import Buttons from "./Components/Buttons";
import Heading from "./Components/Heading";
import "./App.css";
import { useState } from "react";

function App() {
  let [inputVal, setInputVal] = useState("");

  let getData = (clickedData) => {
    // console.log(clickedData);
    if (clickedData == "1/x") {
      setInputVal(inputVal + "(1/");
    } else if (clickedData == "X^2") {
      if (inputVal.length != 0) setInputVal(inputVal * 2);
    } else if (clickedData == "logx") {
      if (inputVal.length != 0) setInputVal(Math.log(inputVal));
    } else if (clickedData == "C") {
      setInputVal("");
    } else if (clickedData == "X") {
      if (inputVal.length != 0) {
        // console.log(typeof inputVal);
        setInputVal(inputVal.slice(0, -1));
      }
    } else if (clickedData == "=") {
      try {
        // console.log(eval(inputVal));
        setInputVal(eval(inputVal));
      } catch (e) {
        console.log(e);
        setInputVal("");
      }
    } else {
      setInputVal(inputVal + clickedData);
    }
  };
  return (
    <>
      <div className="Container">
        <Heading></Heading>
        <Input displayInputVal={inputVal}></Input>
        <Buttons getClickedData={getData}></Buttons>
      </div>
    </>
  );
}

export default App;
