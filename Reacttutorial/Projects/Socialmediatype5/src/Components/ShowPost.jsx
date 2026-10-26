import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import Message from "./Message";

function ShowPost() {
  let postDataArr = useLoaderData(postLoader);
  console.log(postDataArr);
  return (
    <>
      <div className="showPostContainer">
        {postDataArr.map((elem, index) => (
          <Card
            key={index}
            cardData={elem}
            getDeleteIndex={() => deleteData(index)}
          ></Card>
        ))}
        {postDataArr.length == 0 && <Message></Message>}
      </div>
    </>
  );
}

export function postLoader() {
  return (async () => {
    let response = await fetch("https://dummyjson.com/posts");
    let data = await response.json();
    return data.posts;
  })();
}

export default ShowPost;
