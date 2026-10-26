import React, { useContext, useEffect } from "react";
import Card from "./Card";
import Message from "./Message";
import { postContext } from "../Store/ContextStore";
import { useLoaderData } from "react-router-dom";

function CardContainer() {
  let { deletePostData } = useContext(postContext);
  const postData = useLoaderData();
  // console.log("End Fecthing");
  return (
    <>
      {postData.length === 0 ? (
        <Message />
      ) : (
        postData.map((elem, idx) => {
          return (
            <Card
              key={idx}
              itemsObj={elem}
              getDeleteIdx={() => deletePostData(idx)}
            />
          );
        })
      )}
    </>
  );
}

export default CardContainer;

export const ServerData = () => {
  // console.log("Start Fectching");
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};
