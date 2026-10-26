import React, { useEffect } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

function RefreshHandler() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
    const user = localStorage.getItem("jwt");
    if (user) {
        // If user is on login page but already authenticated, redirect to dashboard
        if (location.pathname === "/login" || location.pathname === "/"|| location.pathname === "/oauthSuccess"|| location.pathname === "/authFail") {
            navigate("/dashboard", { replace: true });
        }
    } else {
        // If user is not authenticated and not on login, redirect to login
        if (location.pathname !== "/login") {
            navigate("/login", { replace: true });
        }
    }

    },[location,navigate]);

  return null;
}

export default RefreshHandler