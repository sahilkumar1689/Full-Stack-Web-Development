import React, { useEffect } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

function RefreshHandler({setIsAuth}) {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
    const user = localStorage.getItem("user");
    if (user) {
        setIsAuth(true);
        // If user is on login page but already authenticated, redirect to dashboard
        if (location.pathname === "/login" || location.pathname === "/") {
            navigate("/dashboard", { replace: true });
        }
    } else {
        setIsAuth(false);
        // If user is not authenticated and not on login, redirect to login
        if (location.pathname !== "/login") {
            navigate("/login", { replace: true });
        }
    }

    },[location,navigate,setIsAuth]);

  return null;
}

export default RefreshHandler