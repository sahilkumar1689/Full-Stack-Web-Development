import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { DataStorage } from "../Store/Datastore";
import Message from "./Message";
import Scroller from "./Scroller";

function ShowPost() {
  let { postDataArr } = useContext(DataStorage);
  let { deleteData } = useContext(DataStorage);
  let { scrollerState } = useContext(DataStorage);

  return (
    <>
      <div className="showPostContainer">
        {scrollerState && <Scroller></Scroller>}

        {!scrollerState &&
          postDataArr.map((elem, index) => (
            <Card
              key={index}
              cardData={elem}
              getDeleteIndex={() => deleteData(index)}
            ></Card>
          ))}
        {!scrollerState && postDataArr.length == 0 && <Message></Message>}
      </div>
    </>
  );
}

export default ShowPost;
