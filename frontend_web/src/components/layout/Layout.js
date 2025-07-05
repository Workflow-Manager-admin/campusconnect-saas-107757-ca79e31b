import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

// PUBLIC_INTERFACE
const Layout = ({ userRole, onLogout, theme, onToggleTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        userRole={userRole}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
      <div className="lg:pl-64">
        <Header 
          userRole={userRole}
          onLogout={onLogout}
          theme={theme}
          onToggleTheme={onToggleTheme}
          setSidebarOpen={setSidebarOpen}
        />
        
        <main className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
