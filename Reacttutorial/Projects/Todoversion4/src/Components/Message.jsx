import { useContext } from "react";
import { TodoContextStore } from "../Store/Tododatastore";

function Message() {
  let { dataArr } = useContext(TodoContextStore);
  return (
    dataArr.length == 0 && (
      <p className="emptyMessage">No Work Left Enjoy Yourday.</p>
    )
  );
}

export default Message;
