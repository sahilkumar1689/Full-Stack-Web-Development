import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function OAuthSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    if (token) {
      localStorage.setItem('jwt', token);
      navigate('/dashboard');
    } else {
      navigate('/authFail');
    }
  }, [location, navigate]);

  return <div>Logging you in...</div>;
}

export default OAuthSuccess;
