import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>NotFound</h1>
        <button onClick={()=>navigate("/login")}>Back To login</button>
     </div>
  )
}

export default NotFound