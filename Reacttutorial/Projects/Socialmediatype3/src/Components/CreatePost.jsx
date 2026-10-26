import { useContext, useRef } from "react";
import { DataStorage } from "../Store/Datastore";

function CreatePost() {
  let { addNewData } = useContext(DataStorage);

  let getTitle = useRef();
  let getReactions = useRef();
  let getHashtags = useRef();
  let getContent = useRef();

  let sendData = () => {
    let newtitle = getTitle.current.value;
    let newreactions = getReactions.current.value;
    let newhashtags = getHashtags.current.value;
    let newcontent = getContent.current.value;

    // Try to mimic the post resquest using dummy api's:
    (async () => {
      let response = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newtitle,
          reactions: newreactions,
          tags: newhashtags.split(" "),
          body: newcontent,
          userId: newreactions + 1,
        }),
      });
      let data = await response.json();
      console.log(data);
      addNewData(data);
    })();

    getTitle.current.value = "";
    getReactions.current.value = "";
    getHashtags.current.value = "";
    getContent.current.value = "";
  };
  return (
    <>
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
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              style={{
                backgroundColor: "#303030",
                color: "white",
                fontSize: "15px",
              }}
              ref={getTitle}
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
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              style={{
                backgroundColor: "#303030",
                color: "white",
                fontSize: "15px",
              }}
              ref={getReactions}
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
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              style={{
                backgroundColor: "#303030",
                color: "white",
                fontSize: "15px",
              }}
              ref={getHashtags}
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
              ref={getContent}
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
              onClick={sendData}
            >
              Create Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
