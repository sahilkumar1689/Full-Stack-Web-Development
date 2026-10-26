import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokesArr, setJokesArr] = useState([]);

  useEffect(() => {
    // First Option to fetch the data:
    (async () => {
      // CORS policy handles by using proxy.
      let response = await fetch("/api/jokes");
      let data = await response.json();
      console.log(data);
      setJokesArr(data);
    })();

    // Second option to fetch the data using axios.In this method the responce directly contains the data we not need to convert in into object.
    axios
      .get("/api/jokes")
      .then((response) => {
        console.log(response);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Jokes:</h1>
      <ul>
        {jokesArr.map((elem, ind) => (
          <li key={ind}>{elem.Jokes}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
