import React from 'react'
import { useNavigate } from 'react-router-dom'

function AuthFail() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>AuthFail</h1>
        <button onClick={()=>navigate("/login")}>LogIn</button>
    
    </div>
  )
}

export default AuthFail