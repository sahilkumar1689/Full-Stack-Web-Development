import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutAut } from "./Auth/Auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../FirebaseAuth";

function Sidebar() {
  const navigate = useNavigate();
  const logoutFunc = ()=>{
      logoutAut()
      .then(res=>navigate("/login"))
      .catch(err=>console.log(err.message));
  }

  useEffect(()=>{
    const auth = getAuth(app);
    const ref = onAuthStateChanged(auth,(user)=>{
      if(user) console.log("Yes Login",user);
      else navigate("/login");
    })
    return ()=>ref();
  },[])

  return (
    <div>
      <ul className="navList">
        <li>
          {" "}
          <Link to="/dashboard">StudentList</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/dashboard/addstudent">AddStudent</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/dashboard/addFaculty">AddFaculty</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/dashboard/allFaculty">ListFaculty</Link>{" "}
        </li>
      </ul>
      <button onClick={logoutFunc}>LogOut</button>
    </div>
  );
}

export default Sidebar;
