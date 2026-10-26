import React, { useContext, useRef } from "react";
import { postContext } from "../Store/ContextStore";
import { Form, redirect } from "react-router-dom";

function Forms() {
  // let { addPostData } = useContext(postContext);

  return (
    <>
      <Form method="POST" className="formContainer">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Enter Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Going to Vacations"
            name="title"
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
            name="tags"
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
            name="body"
          />
        </div>
        <div className="mb-3" style={{ textAlign: "center" }}>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </Form>
    </>
  );
}

export default Forms;

export const createPostAction = async (data) => {
  let formData = await data.request.formData();
  let postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  postData["userId"] = 5;
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

  return redirect("/");
};
