import { useContext } from "react";
import Li from "./li";
import { TodoContextStore } from "../Store/Tododatastore";

function Lists() {
  // Updation = Use context api method to handle the state of toDoDataArr.

  let { dataArr } = useContext(TodoContextStore);
  let { deleteData } = useContext(TodoContextStore);

  return (
    <>
      {dataArr.map((elem, index) => (
        <Li
          key={index}
          TaskName={elem.name}
          TaskDate={elem.date}
          getIndex={() => {
            deleteData(index);
          }}
        ></Li>
      ))}
    </>
  );
}

export default Lists;
