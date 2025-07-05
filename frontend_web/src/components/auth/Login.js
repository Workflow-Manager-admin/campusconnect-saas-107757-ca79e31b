import React from 'react';
import LoginForm from './LoginForm';

// PUBLIC_INTERFACE
const Login = ({ onLogin }) => {
  return <LoginForm onLogin={onLogin} />;
};

export default Login;
