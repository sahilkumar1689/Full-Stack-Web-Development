import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

function Login() {
   
  
  const handleGoogleAuth = ()=>{
    window.location.href = 'http://localhost:8080/auth/google';

  }
  return (
    <>
      <button onClick={handleGoogleAuth}>Google SignIn</button>
    </>
  )
}

export default Login