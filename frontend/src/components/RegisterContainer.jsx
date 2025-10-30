// src/components/RegisterContainer.jsx

import React from 'react';
import RegisterForm from './RegisterForm'; //formulario
import RegisterInfoPanel from './RegisterInfoPanel'; //panel

const RegisterContainer = () => {
  return (
    <div className="container-all"> 
      <RegisterForm />
      <RegisterInfoPanel />
    </div>
  );
};

export default RegisterContainer;