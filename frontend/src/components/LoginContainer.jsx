// src/components/LoginContainer.jsx

import React from 'react';
import LoginForm from './LoginForm'; // formulario
import LoginInfoPanel from './LoginInfoPanel'; // panel

const LoginContainer = () => {
  return (
    //clase que define el layout de 2 columnas en el css
    <div className="container-all"> 
      <LoginForm />
      <LoginInfoPanel />
    </div>
  );
};

export default LoginContainer;