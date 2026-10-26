import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar";
import CreatePost from "./Components/CreatePost";
import ShowPost from "./Components/ShowPost";
import "./App.css";
import { useState } from "react";
import DataProvider from "./Store/Datastore";

function App() {
  const [sideBarState, setSideBarState] = useState("Home");
  let sideBarStateHandler = (clickData) => {
    setSideBarState(clickData);
  };
  return (
    <>
      <DataProvider>
        <div className="ParentContainer">
          <Header></Header>
          <div className="centerContainer">
            <SideBar
              sideBarState={sideBarState}
              sideBarStateHandler={sideBarStateHandler}
            ></SideBar>
            {sideBarState == "Home" ? (
              <ShowPost></ShowPost>
            ) : (
              <CreatePost></CreatePost>
            )}
          </div>
          <Footer></Footer>
        </div>
      </DataProvider>
    </>
  );
}

export default App;
