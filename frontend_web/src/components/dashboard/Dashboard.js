import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProfile } from '../../store/slices/userSlice';
import { fetchNotifications } from '../../store/slices/notificationsSlice';
import DashboardStats from './DashboardStats';
import RecentActivity from './RecentActivity';
import QuickActions from './QuickActions';

// PUBLIC_INTERFACE
const Dashboard = ({ userRole }) => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.user);
  const { notifications } = useSelector((state) => state.notifications);

  useEffect(() => {
    dispatch(fetchUserProfile());
    dispatch(fetchNotifications());
  }, [dispatch]);

  const getWelcomeMessage = () => {
    const hour = new Date().getHours();
    let greeting = 'Good morning';
    
    if (hour >= 12 && hour < 17) {
      greeting = 'Good afternoon';
    } else if (hour >= 17) {
      greeting = 'Good evening';
    }

    return `${greeting}, ${profile?.name || 'User'}!`;
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {getWelcomeMessage()}
            </h1>
            <p className="text-gray-600 mt-1">
              Here's what's happening with your campus recruitment today.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-gray-500">Today</div>
                <div className="text-lg font-semibold text-gray-900">
                  {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Stats */}
      <DashboardStats userRole={userRole} />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <RecentActivity userRole={userRole} />
        </div>

        {/* Quick Actions */}
        <div>
          <QuickActions userRole={userRole} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
