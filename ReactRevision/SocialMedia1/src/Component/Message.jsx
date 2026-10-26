import React, { useContext } from "react";
import { postContext } from "../Store/ContextStore";

function Message() {
  const { scrollerState } = useContext(postContext);
  return (
    <>
      <div className="messageContainer">
        {scrollerState ? (
          <div className="spinner spin"></div>
        ) : (
          <h1>Not Post To Show.</h1>
        )}
      </div>
    </>
  );
}

export default Message;
