import React, { useContext, useRef } from "react";
import { postContext } from "../Store/ContextStore";

function Form() {
  let { addPostData } = useContext(postContext);

  let titleValue = useRef();
  let hastagsValue = useRef();
  let descValue = useRef();

  function getData(event) {
    event.preventDefault();

    let obj = {
      title: titleValue.current.value,
      body: descValue.current.value,
      tags: hastagsValue.current.value.split(" "),
    };
    titleValue.current.value = "";
    descValue.current.value = "";
    hastagsValue.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: obj.title,
        body: obj.body,
        userId: 1,
        tags: obj.tags,
        reactions: 0,
      }),
    })
      .then((res) => res.json())
      .then((dataObj) => addPostData(dataObj));
  }

  return (
    <>
      <form className="formContainer">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Enter Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Going to Vacations"
            ref={titleValue}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Enter Hastags:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="#Chill #Vacations"
            ref={hastagsValue}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            defaultValue={""}
            ref={descValue}
          />
        </div>
        <div className="mb-3" style={{ textAlign: "center" }}>
          <button className="btn btn-primary" onClick={getData}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
