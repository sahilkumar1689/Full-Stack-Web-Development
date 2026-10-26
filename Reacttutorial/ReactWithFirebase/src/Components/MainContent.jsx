import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function MainContent() {
  return (
    <>
      <div className="container">
        <div className="leftDiv">
          <Sidebar />
        </div>
        <div className="rightDiv">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default MainContent;
