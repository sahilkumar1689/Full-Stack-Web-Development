// import Navbar from "./";
import Navbar from "./Component/Navbar.jsx";
import SideBar from "./Component/SideBar.jsx";
import Footer from "./Component/Footer.jsx";
import PostContainer from "./Component/PostContainer.jsx";
import { useState } from "react";
import ContextStore from "./Store/ContextStore.jsx";
import "./index.css";

function App() {
  const [menuState, setMenuState] = useState(false);
  return (
    <>
      <ContextStore>
        <Navbar />
        <div className="container2">
          <SideBar menuState={menuState} setMenuState={setMenuState} />
          <PostContainer menuState={menuState} setMenuState={setMenuState} />
        </div>
        <Footer />
      </ContextStore>
    </>
  );
}

export default App;
