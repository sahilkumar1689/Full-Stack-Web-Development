import React, { useRef } from "react";
import { postItem, updateData } from "./Services/Axios";

function Input({ postData, setPostData, editPostId }) {
  const titleValue = useRef();
  const bodyValue = useRef();

  const addNewPost = async (newObj) => {
    try {
      const res = await postItem(newObj);
      if (res.status >= 200 && res.status < 300) {
        setPostData((prev) => [...prev, res.data]);
        alert("Data Added Succesfully.");
      }
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  const editPost = async (newData) => {
    try {
      const res = await updateData(editPostId, newData);
      if (res.status >= 200 && res.status < 300) {
        setPostData((prev) => {
          return prev.map((elem) =>
            elem.id === res.data.id ? res.data : elem
          );
        });
        alert("Data Edited Successfully");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleAddData = (event) => {
    let title = titleValue.current.value;
    let body = bodyValue.current.value;
    // console.log(event.target.value);

    if (title !== "" && body !== "") {
      const newObj = {
        title,
        body,
      };
      titleValue.current.value = "";
      bodyValue.current.value = "";

      if (event.target.value === "Add") addNewPost(newObj);
      else if (event.target.value === "Edit") editPost(newObj);
    } else {
      alert("Please Enter Any Value.");
    }
  };
  return (
    <>
      <h1 style={{ color: "white", textAlign: "center" }}>
        {editPostId ? "Edit Item" : "Add New Item"}
      </h1>
      <div
        className="inputContainer"
        style={{
          padding: "10px",
          color: "white",
          backgroundColor: "rgb(72, 63, 63)",
          width: "40%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <input type="text" style={{ padding: "5px 30px" }} ref={titleValue} />
        <input type="text" style={{ padding: "5px 30px" }} ref={bodyValue} />
        <button
          className="btn btn-success"
          style={{ padding: "5px 30px" }}
          value={editPostId ? "Edit" : "Add"}
          onClick={handleAddData}
        >
          {editPostId ? "Edit" : "Add"}
        </button>
      </div>
    </>
  );
}

export default Input;
