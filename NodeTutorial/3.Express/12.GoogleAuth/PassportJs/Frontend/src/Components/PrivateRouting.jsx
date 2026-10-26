// Components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('jwt');

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  
  // You can also implement the token expiration checking here.You simple need to create a backend end point with jwtVerifyMiddleware which firstly check the your token if expires or not valid then throw error else fetch the basic user details and you can store or show on the dashboard.

  return children;
};

export default PrivateRoute;
