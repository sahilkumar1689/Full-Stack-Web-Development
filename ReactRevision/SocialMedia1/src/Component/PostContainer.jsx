import React from "react";
import Form from "./Form";
import CardContainer from "./CardContainer";
function PostContainer({ menuState, setMenuState }) {
  return (
    <div className="postContainer">
      {!menuState ? <CardContainer /> : <Form />}
    </div>
  );
}

export default PostContainer;
