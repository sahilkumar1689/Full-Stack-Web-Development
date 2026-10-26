import React, { useEffect, useState } from "react";
import { deletePost, getPost } from "./Services/Axios";
import Input from "./Input";

function App() {
  const [postData, setPostData] = useState([]);
  const [editPostId, setEditPostId] = useState(null);

  const getdata = async (signal) => {
    try {
      // Pass the signal to your axios request
      let dataObj = await getPost(signal);
      console.log(dataObj.data);
      setPostData(dataObj.data);
    } catch (err) {
      // console.log(err);
      console.log(err.message);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    getdata(signal);

    return () => {
      controller.abort();
    };
  }, []);

  // Delete Function:
  const deleteItem = async (id) => {
    try {
      const res = await deletePost(id);
      // console.log(res);
      if (res.status === 200) {
        // One thing you need to be aware of , we are not working with the actuall api , when we work with the actual api we simply just call the delete request and if status get 200 then we need to again fetch the real data.You utilize the custom hook also.
        // It is just for temporary puspose.
        setPostData((prev) => {
          let newArr = prev.filter((elem, idx) => elem.id !== id);
          return newArr;
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Input
        postData={postData}
        setPostData={setPostData}
        editPostId={editPostId}
      />
      <div
        className="postContainer"
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
          width: "90%",
          margin: "50px auto",
          padding: "10px",
          gap: "10px",
        }}
      >
        {postData.map((elem, idx) => {
          const { id, title, body } = elem;
          return (
            <div
              className="card"
              style={{
                width: "25rem",
                borderLeft: "5px solid whitesmoke",
                padding: "10px",
                color: "white",
                backgroundColor: "rgb(72, 63, 63)",
                lineHeight: "30px",
              }}
              key={id}
            >
              <div className="card-body">
                <h5 className="card-title">{idx + 1}</h5>
                <h6 className="card-subtitle mb-2 ">{title}</h6>
                <p className="card-text">{body}</p>
                <button
                  className="btn btn-primary"
                  style={{ margin: "5px", padding: "7px 25px" }}
                  onClick={() => setEditPostId(id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  style={{ margin: "5px", padding: "7px 25px" }}
                  onClick={() => deleteItem(id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
