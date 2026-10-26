import React, { useContext } from "react";
import List from "./List";
import { TodoContext } from "../Store/ContextStore";

function ToDoContainer() {
  const { data, deleteIdx, isCheckedArr, setCheckedArr } =
    useContext(TodoContext);
  return (
    <>
      {data.map((elem, idx) => (
        <List
          key={idx}
          name={elem.name}
          date={elem.date}
          getIdx={() => deleteIdx(idx)}
          isChecked={isCheckedArr[idx]}
          isClicked={(checkVal) =>
            setCheckedArr((prev) => {
              const newArr = [...prev];
              // console.log(newArr);
              newArr[idx] = checkVal === false ? 0 : 1;
              // console.log(newArr);
              return newArr;
            })
          }
        />
      ))}
    </>
  );
}

export default ToDoContainer;
