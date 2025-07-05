import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './App.css';

// Import components
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import StudentDashboard from './components/dashboard/StudentDashboard';
import TPODashboard from './components/dashboard/TPODashboard';
import SuperAdminDashboard from './components/dashboard/SuperAdminDashboard';
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/auth/ProtectedRoute';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Check authentication status on app load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        const role = localStorage.getItem('user_role');
        
        if (token && role) {
          setIsAuthenticated(true);
          setUserRole(role);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // PUBLIC_INTERFACE
  const handleLogin = (token, role) => {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('user_role', role);
    setIsAuthenticated(true);
    setUserRole(role);
  };

  // PUBLIC_INTERFACE
  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_role');
    setIsAuthenticated(false);
    setUserRole(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <Provider store={store}>
      <Router>
        <div className="App min-h-screen bg-gray-50">
          <Routes>
            {/* Public Routes */}
            <Route 
              path="/login" 
              element={
                !isAuthenticated ? (
                  <Login onLogin={handleLogin} />
                ) : (
                  <Navigate to="/dashboard" replace />
                )
              } 
            />
            
            {/* Protected Routes */}
            <Route 
              path="/" 
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Layout 
                    userRole={userRole} 
                    onLogout={handleLogout}
                    theme={theme}
                    onToggleTheme={toggleTheme}
                  />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard userRole={userRole} />} />
              
              {/* Student Routes */}
              <Route 
                path="student/*" 
                element={
                  userRole === 'student' ? (
                    <StudentDashboard />
                  ) : (
                    <Navigate to="/dashboard" replace />
                  )
                } 
              />
              
              {/* TPO Routes */}
              <Route 
                path="tpo/*" 
                element={
                  userRole === 'tpo' ? (
                    <TPODashboard />
                  ) : (
                    <Navigate to="/dashboard" replace />
                  )
                } 
              />
              
              {/* Super Admin Routes */}
              <Route 
                path="admin/*" 
                element={
                  userRole === 'super_admin' ? (
                    <SuperAdminDashboard />
                  ) : (
                    <Navigate to="/dashboard" replace />
                  )
                } 
              />
            </Route>
            
            {/* Fallback */}
            <Route 
              path="*" 
              element={
                isAuthenticated ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <Navigate to="/login" replace />
                )
              } 
            />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
