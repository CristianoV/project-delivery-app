import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/login');
  }, [navigate]);

  return (
    <h1>Redirect</h1>
  );
}

export default RedirectLogin;
