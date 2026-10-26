import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState } from "react";
import RefreshHandler from "./components/RefreshHandler";

function App() {
  const [isAuth,setIsAuth] = useState(false);
  const GoogleOAuthProviderwrapper = () => {
    return (
      <GoogleOAuthProvider clientId="">
        <Login></Login>
      </GoogleOAuthProvider>
    );
  };

  const PrivateRoute = ({elem})=>{
    return isAuth ? elem : <Navigate to="/login" />;
  }

  return (
    <>
      <BrowserRouter>
      <RefreshHandler setIsAuth={setIsAuth} />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<GoogleOAuthProviderwrapper />} />
          <Route path="/dashboard" element={<PrivateRoute elem={<Dashboard />} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}
export default App;

// {"web":
// {"client_id":"","project_id":"robotic-algebra-466420-c0",
// "auth_uri":"https://accounts.google.com/o/oauth2/auth",
// "token_uri":"https://oauth2.googleapis.com/token",
// "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"",
// "javascript_origins":["http://localhost:5173"]
//}
//}
