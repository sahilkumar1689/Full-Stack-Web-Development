import React, { useState } from "react";

function Temp() {
  const [inputText, changeInputText] = useState({
    firstInput: "",
    secondInput: "",
  });
  return (
    <div>
      <input
        type="text"
        name="firstInput"
        onChange={(e) => {
          console.log(e.target.value);
          let { name, value } = e.target;
          changeInputText((prevSate) => {
            return { ...prevSate, [name]: value };
          });
        }}
      />
      <input
        type="text"
        name="secondInput"
        onChange={(e) => {
          console.log(e.target.value);
          let { name, value } = e.target;
          changeInputText((prevSate) => {
            return { ...prevSate, [name]: value };
          });
        }}
      />
      <span>{inputText.firstInput + inputText.secondInput}</span>
    </div>
  );
}

export default Temp;
