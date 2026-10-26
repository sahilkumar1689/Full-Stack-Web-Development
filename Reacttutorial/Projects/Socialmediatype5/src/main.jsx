import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost, { createPostData } from "./Components/CreatePost.jsx";
import ShowPost, { postLoader } from "./Components/ShowPost.jsx";
import Header from "./Components/Header.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // Add inside the App component.
    children: [
      // You can also load some data before rendring the components it is basically used similarly to the useEffect.
      { path: "/", element: <ShowPost />, loader: postLoader },

      // You can also perform some action after form submittion in react Form router Component.
      { path: "/create-Post", element: <CreatePost />, action: createPostData },
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
