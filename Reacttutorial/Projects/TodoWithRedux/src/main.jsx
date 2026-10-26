import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Provider} from "react-redux";
import ReduxStore from "./ReduxStore/store.js";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import TodoList from "./TodoList.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={ReduxStore}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/todoList" element={<TodoList />} />
    </Routes>
  </BrowserRouter>
  </Provider>
  </StrictMode>,
)
