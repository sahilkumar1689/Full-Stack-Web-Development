import { useContext, useRef } from "react";
import { DataStorage } from "../Store/Datastore";
import { Form, redirect, useNavigate } from "react-router-dom";

function CreatePost() {
  // let { addNewData } = useContext(DataStorage);

  return (
    <>
      <Form method="POST">
        <div className="creatPostContainer">
          <div className="postContainer">
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label"
                style={{ color: "white", fontSize: "20px" }}
              >
                Enter Story Title:
              </label>
              <input
                className="form-control"
                id="exampleFormControlInput1"
                style={{
                  backgroundColor: "#303030",
                  color: "white",
                  fontSize: "15px",
                }}
                name="title"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label"
                style={{ color: "white", fontSize: "20px" }}
              >
                Enter Reactions:
              </label>
              <input
                className="form-control"
                id="exampleFormControlInput1"
                style={{
                  backgroundColor: "#303030",
                  color: "white",
                  fontSize: "15px",
                }}
                name="reactions"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label"
                style={{ color: "white", fontSize: "20px" }}
              >
                Enter Hashtags:
              </label>
              <input
                className="form-control"
                id="exampleFormControlInput1"
                style={{
                  backgroundColor: "#303030",
                  color: "white",
                  fontSize: "15px",
                }}
                name="tags"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
                style={{ color: "white", fontSize: "20px" }}
              >
                Enter Your Story:
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                style={{
                  backgroundColor: "#303030",
                  color: "white",
                  fontSize: "15px",
                }}
                name="body"
              ></textarea>
            </div>

            <div className="createPostBtn" style={{ textAlign: "center" }}>
              <button
                style={{
                  border: "2px solid #393939",
                  backgroundColor: "#0D6EFD",
                  width: "100px",
                  height: "40px",
                  borderRadius: "10px",
                  color: "white",
                }}
                type="submit"
              >
                Create Post
              </button>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
}

export async function createPostData(data) {
  // Simple get data from the react router Form:
  let formData = await data.request.formData();
  let postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  postData.userId = postData.reactions + 1;
  console.log(postData);

  (async () => {
    let response = await fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    let data = await response.json();
    console.log(data);
    // addNewData(data);
  })();

  return redirect("/");
}

export default CreatePost;
