import React from "react";

function TabBtns({ tabName, isActive, clicked }) {
  console.log(tabName);
  return (
    <>
      <li className={`${isActive ? "active" : "null"}`} onClick={clicked}>
        {tabName}
      </li>
    </>
  );
}

export default TabBtns;
