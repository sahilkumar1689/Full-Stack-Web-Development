import React, { useEffect, useState } from "react";
import { getPost } from "../Services/Ap";

function FetchOld() {
  const [postData, setPostData] = useState([]);

  const getPostData = async () => {
    try {
      let res = await getPost();
      res.status === 200 ? setPostData(res.data) : [];
      // console.log(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getPostData();
  }, []);
  return (
    <>
      <div
        className="oldFetchContainer"
        style={{
          border: "2px solid black",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          flexFlow: "row wrap",
        }}
      >
        {postData.map((elem, idx) => {
          const { id, title, body } = elem;
          return (
            <div
              className="card"
              style={{
                width: "25rem",
                borderLeft: "5px solid lightblue",
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
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FetchOld;
