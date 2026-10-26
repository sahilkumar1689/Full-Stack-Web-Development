import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Home from "./Components/Home.jsx";
// import Bag from "./Components/Bag.jsx";
import reduxStore from "./Store/index.js";
import { Provider } from "react-redux";

// Lazy Load Components
const Home = lazy(() => import("./Components/Home"));
const Bag = lazy(() => import("./Components/Bag"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/bag",
        element: (
          <Suspense>
            <Bag />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={reduxStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
