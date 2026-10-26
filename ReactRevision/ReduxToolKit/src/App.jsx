import { reduxStore } from "../Store";
import Buttons from "./Component/Buttons";
import Heading from "./Component/Heading";
import { Provider, useSelector } from "react-redux";
import Messaage from "./Component/Messaage";

function App() {
  let messageState = useSelector((store) => store.MessageState);
  return (
    <>
      {messageState ? <Messaage /> : <Heading />}
      <Buttons />
    </>
  );
}

export default App;
