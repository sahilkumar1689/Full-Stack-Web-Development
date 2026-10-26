import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ButtonComponent1,ButtonComponent2} from "./App.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* You clearly see that in order to use the components we treat it as a tag.*/}
    <App />
    <ButtonComponent1/>
    <ButtonComponent2/>
  </React.StrictMode>,
)
