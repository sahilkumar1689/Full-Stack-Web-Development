import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import NotFound from "./Components/NotFound";
import AuthFail from "./Components/AuthFail";
import OAuthSuccess from "./Components/AuthSuccess";
import PrivateRoute from "./Components/PrivateRouting";


function App() {
  return<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/oauthSuccess" element={<OAuthSuccess/>} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
      <Route path="/authFail" element={<AuthFail/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>

  </>;
}
export default App;
