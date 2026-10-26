import React, { useContext, useEffect } from "react";
import Card from "./Card";
import Message from "./Message";
import { postContext } from "../Store/ContextStore";

function CardContainer() {
  let { postData, deletePostData } = useContext(postContext);

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
