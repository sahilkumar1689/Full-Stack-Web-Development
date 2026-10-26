import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from "./Components/MainContent";
import StudentData from "./Components/StudentData";
import AddStudent from "./Components/AddStudent";
import UpdataStudent from "./Components/UpdataStudent";
import AddFaculty from "./Components/AddFaculty";
import AllFaculty from "./Components/AllFaculty";
import UpdateFaculty from "./Components/UpdateFaculty";
import SignUp from "./Components/Auth/SignUp";
import Login from "./Components/Auth/Login";

const router = createBrowserRouter([
  {path:"/",element:<SignUp/>},
  {path:"/login",element:<Login/>},
  {
    path: "/dashboard",
    element: <MainContent />,
    children: [
      { path: "", element: <StudentData /> },
      { path: "addstudent", element: <AddStudent /> },
      { path: "updateStudent", element: <UpdataStudent /> },
      { path: "addFaculty", element: <AddFaculty /> },
      { path: "allFaculty", element: <AllFaculty /> },
      { path: "updateFaculty", element: <UpdateFaculty /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
