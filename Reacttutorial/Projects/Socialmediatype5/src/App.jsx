import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar";
import CreatePost from "./Components/CreatePost";
import ShowPost from "./Components/ShowPost";
import "./App.css";
import { useContext, useState } from "react";
import DataProvider, { DataStorage } from "./Store/Datastore";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <DataProvider>
        <div className="ParentContainer">
          <Header></Header>
          <div className="centerContainer">
            <SideBar></SideBar>
            {/* We use outlet component for layout routings.It means for children routings.Put this tag on that place where you want to render your child components. */}
            <Outlet />
          </div>
          <Footer></Footer>
        </div>
      </DataProvider>
    </>
  );
}

export default App;
