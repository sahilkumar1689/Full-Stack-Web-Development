import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateStdData } from "./addData";

function UpdataStudent() {
  let rollValue = useRef();
  let nameValue = useRef();
  let phoneValue = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const handleForm = (e) => {
    e.preventDefault();
    let stdData = {
      rollNo: rollValue.current.value,
      stdName: nameValue.current.value,
      stdPhone: phoneValue.current.value,
    };
    rollValue.current.value = "";
    nameValue.current.value = "";
    phoneValue.current.value = "";

    updateStdData(stdData)
      .then((res) => navigate("/dashboard"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form>
        <label htmlFor="roll">
          Enter RollNo:
          <input
            type="number"
            id="roll"
            placeholder="RollNo"
            value={location.state.rollNo}
            ref={rollValue}
            disabled
            required
          />
        </label>
        <br />
        <br />
        <label htmlFor="name">
          Enter Name:
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={location.state.stdName}
            ref={nameValue}
            disabled
            required
          />
        </label>
        <br />
        <br />
        <label htmlFor="phone">
          Enter PhoneNo:
          <input
            type="number"
            id="phone"
            placeholder="phoneNo"
            min={10}
            ref={phoneValue}
            required
          />
        </label>
        <br />
        <br />
        <button onClick={handleForm}>ADD</button>
      </form>
    </div>
  );
}

export default UpdataStudent;
