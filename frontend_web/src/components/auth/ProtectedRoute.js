import React from 'react';
import { Navigate } from 'react-router-dom';

// PUBLIC_INTERFACE
const ProtectedRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
