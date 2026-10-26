import React, { useState } from "react";

function Form() {
  // Creating states to store the user Value:
  let [nameValue, setNameValue] = useState();
  let [emailValue, setemailValue] = useState();
  let [passwordValue, setpasswordValue] = useState();
  let [genderValue, setgenderValue] = useState();
  let [stateValue, setstateValue] = useState();
  let [terms, setTermsValue] = useState(0);

  // Creating function to hangle onChange:
  function setName(event) {
    setNameValue(event.target.value);
  }
  function setEmail(event) {
    setemailValue(event.target.value);
  }
  function setPassword(event) {
    setpasswordValue(event.target.value);
  }
  function setGender(event) {
    setgenderValue(event.target.value);
  }
  function setState(event) {
    setstateValue(event.target.value);
  }

  function getInputValue(event) {
    event.preventDefault();
  }
  return (
    <>
      <div className="formContainer">
        <form>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              placeholder="Enter Name"
              id="name"
              onChange={setName}
              required
            />
          </label>
          <br />
          <br />
          <label htmlFor="email">
            Email:
            <input
              type="email"
              placeholder="Enter Email"
              id="email"
              onChange={setEmail}
              required
            />
          </label>
          <br />
          <br />
          <label htmlFor="password">
            Password:
            <input
              type="password"
              placeholder="Enter password"
              id="password"
              onChange={setPassword}
              required
            />
          </label>
          <br />
          <br />
          <label htmlFor="Gender">
            Gender:
            <input
              type="text"
              placeholder="Enter Gender"
              id="Gender"
              onChange={setGender}
              required
            />
          </label>
          <br />
          <br />
          <label htmlFor="State">
            State:
            <input
              type="text"
              placeholder="Enter State"
              id="State"
              onChange={setState}
              required
            />
          </label>
          <br />
          <br />
          <label htmlFor="t&c">
            <input
              type="checkbox"
              id="t&c"
              onClick={() => setTermsValue((prev) => (prev ? 0 : 1))}
            />
            <span>t&c</span>
          </label>
          <br />
          <br />
          <button onClick={getInputValue}>Sumbit</button>
        </form>
      </div>
      <div className="userDetailsContainer">
        <p>Name : {nameValue}</p>
        <p>Email : {emailValue}</p>
        <p>Password : {passwordValue}</p>
        <p>Gender : {genderValue}</p>
        <p>State : {stateValue}</p>
        <p>Terms & Conditions : {terms ? "Accepted" : "Not Accepted"}</p>
      </div>
    </>
  );
}

export default Form;
