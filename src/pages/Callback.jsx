import React from 'react';
import { useNavigate } from 'react-router-dom';

import authControllers from '../controllers/authController';


export default function Callback() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) authControllers.handleAuthorizationCallback(code, navigate);
    else console.error('Authorization code not found in URL');

  }, [navigate]);

  return (
    <div>Processing authorization...</div>
  );
};
