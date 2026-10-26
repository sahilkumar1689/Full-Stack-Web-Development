import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost from "./Components/CreatePost.jsx";
import ShowPost from "./Components/ShowPost.jsx";
import Header from "./Components/Header.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // Add inside the App component.
    children: [
      { path: "/", element: <ShowPost /> },
      { path: "/create-Post", element: <CreatePost /> },
    ],
  },

  // Add component independently in the new page.
  { path: "/newPage", element: <Header /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
