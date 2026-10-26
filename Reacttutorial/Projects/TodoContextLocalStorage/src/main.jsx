import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TodoProvider from "./Storage/contextStore.jsx";
import App from "./App.jsx";
import "./main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>
);
