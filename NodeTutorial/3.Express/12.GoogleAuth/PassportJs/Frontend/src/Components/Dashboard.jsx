import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function Dashboard() {
    const location = useLocation();
    useEffect(() => {
      const params = new URLSearchParams(location.search);
      const token = params.get('token');
  
      console.log(token);
    }, [location]);
  return (
    <div>Your Logged In Successfully.</div>
  )
}

export default Dashboard