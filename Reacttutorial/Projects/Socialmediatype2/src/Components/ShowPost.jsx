import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { DataStorage } from "../Store/Datastore";
import Message from "./Message";
import Scroller from "./Scroller";

function ShowPost() {
  let { postDataArr } = useContext(DataStorage);
  let { deleteData } = useContext(DataStorage);
  let { setServerData } = useContext(DataStorage);

  let [scrollerState, setScrollerState] = useState(false);

  useEffect(() => {
    setScrollerState(true);

    const controll = new AbortController();
    const signal = controll.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        setServerData(data.posts);
        setScrollerState(false);
      });

    // (async () => {
    //   setScrollerState(true);
    //   let response = await fetch("https://dummyjson.com/posts", { signal });
    //   let data = await response.json();
    //   // console.log(data.posts);
    //   setServerData(data.posts);
    //   // setServerData([]);
    //   setScrollerState(false);
    // })();

    return () => {
      console.log("Cleaning up.");
      controll.abort();
    };
  }, []);

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
