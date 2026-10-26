import { useContext } from "react";
import Card from "./Card";
import { DataStorage } from "../Store/Datastore";
import Message from "./Message";

function ShowPost() {
  let { postDataArr } = useContext(DataStorage);
  let { deleteData } = useContext(DataStorage);
  let { setServerData } = useContext(DataStorage);

  let getDataFromServer = () => {
    (async () => {
      let response = await fetch("https://dummyjson.com/posts");
      let data = await response.json();
      console.log(data.posts);
      setServerData(data.posts);
    })();
  };
  return (
    <>
      <div className="showPostContainer">
        {console.log(postDataArr)}
        {postDataArr.map((elem, index) => (
          <Card
            key={index}
            cardData={elem}
            getDeleteIndex={() => deleteData(index)}
          ></Card>
        ))}
        {postDataArr.length == 0 && (
          <Message serverDataHandler={getDataFromServer}></Message>
        )}
      </div>
    </>
  );
}

export default ShowPost;
