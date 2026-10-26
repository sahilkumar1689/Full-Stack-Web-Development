import { useContext, useRef } from "react";
import { DataStorage } from "../Store/Datastore";

function CreatePost() {
  let { addNewData } = useContext(DataStorage);

  let getTitle = useRef();
  let getReactions = useRef();
  let getHashtags = useRef();
  let getContent = useRef();

  let sendData = () => {
    let title = getTitle.current.value;
    let reactions = getReactions.current.value;
    let hashtags = getHashtags.current.value;
    let content = getContent.current.value;

    addNewData(title, reactions, hashtags, content);

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
              for="exampleFormControlInput1"
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
              for="exampleFormControlInput1"
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
              for="exampleFormControlInput1"
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
              for="exampleFormControlTextarea1"
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
