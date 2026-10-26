import React, { useContext } from "react";
import { TodoContext } from "../Store/ContextStore";

function Message() {
  const { data } = useContext(TodoContext);
  return (
    <>
      {data.length == 0 && (
        <p style={{ marginTop: "50px", fontSize: "20px" }}>No Work To Do.</p>
      )}
    </>
  );
}

export default Message;
