import { useAuth } from '../contexts/AuthContext';
import { useState, useEffect } from 'react';
import StudentDashboard from '../components/dashboards/StudentDashboard';
import TPODashboard from '../components/dashboards/TPODashboard';
import SuperAdminDashboard from '../components/dashboards/SuperAdminDashboard';
import DashboardLoading from '../components/shared/DashboardLoading';

const Dashboard = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading - replace with actual API calls
    const loadDashboardData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoading(false);
    };

    loadDashboardData();
  }, []);

  const renderDashboard = () => {
    if (isLoading) {
      return <DashboardLoading />;
    }

    switch (user?.role) {
      case 'student':
        return <StudentDashboard />;
      case 'tpo':
        return <TPODashboard />;
      case 'admin':
        return <SuperAdminDashboard />;
      default:
        return (
          <div className="text-center p-6">
            <p className="text-gray-500">Please log in to view your dashboard</p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-gray-500">
          Welcome back, {user?.name || 'Guest'}
        </p>
      </div>
      {renderDashboard()}
    </div>
  );
};

export default Dashboard;
