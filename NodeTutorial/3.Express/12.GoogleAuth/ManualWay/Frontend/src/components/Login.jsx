import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
  const responseGoogle = async (authResult) => {
    try {
        const code = authResult['code'];
        if(code){
            console.log(authResult);
            // Send data to backend:
            const res = await axios.get(`http://localhost:8080/auth/google?code=${code}`);
            console.log(res);
            // Fetch user info from response and store in localStorage, then navigate to dashboard
            if (res.data && res.data.user) {
            localStorage.setItem("user", JSON.stringify(res.data.user));
            navigate("/dashboard");
            }
        }
    } catch (error) {
      console.log(err);
    }
  };
  const googleLogIn = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });
  return <button onClick={() => googleLogIn()}>SignUp With Google</button>;
}

export default Login;
