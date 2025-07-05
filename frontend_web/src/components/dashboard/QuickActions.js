import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  PlusIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

// PUBLIC_INTERFACE
const QuickActions = ({ userRole }) => {
  const navigate = useNavigate();

  const getActionsForRole = () => {
    if (userRole === 'student') {
      return [
        {
          name: 'Browse Jobs',
          description: 'Find and apply to new opportunities',
          icon: DocumentTextIcon,
          color: 'bg-blue-500',
          action: () => navigate('/student/jobs')
        },
        {
          name: 'Update Profile',
          description: 'Keep your profile up to date',
          icon: UserGroupIcon,
          color: 'bg-green-500',
          action: () => navigate('/student/profile')
        },
        {
          name: 'View Applications',
          description: 'Track your application status',
          icon: ChartBarIcon,
          color: 'bg-purple-500',
          action: () => navigate('/student/applications')
        },
        {
          name: 'Check Schedule',
          description: 'View upcoming interviews',
          icon: CalendarIcon,
          color: 'bg-orange-500',
          action: () => navigate('/student/rounds')
        }
      ];
    } else if (userRole === 'tpo') {
      return [
        {
          name: 'Add Student',
          description: 'Register new students',
          icon: PlusIcon,
          color: 'bg-blue-500',
          action: () => navigate('/tpo/students/add')
        },
        {
          name: 'Post Job',
          description: 'Create new job posting',
          icon: DocumentTextIcon,
          color: 'bg-green-500',
          action: () => navigate('/tpo/jobs/create')
        },
        {
          name: 'View Analytics',
          description: 'Check placement statistics',
          icon: ChartBarIcon,
          color: 'bg-purple-500',
          action: () => navigate('/tpo/analytics')
        },
        {
          name: 'Manage Settings',
          description: 'Configure system settings',
          icon: CogIcon,
          color: 'bg-orange-500',
          action: () => navigate('/tpo/settings')
        }
      ];
    } else if (userRole === 'super_admin') {
      return [
        {
          name: 'Add College',
          description: 'Onboard new institution',
          icon: PlusIcon,
          color: 'bg-blue-500',
          action: () => navigate('/admin/colleges/add')
        },
        {
          name: 'System Analytics',
          description: 'View platform statistics',
          icon: ChartBarIcon,
          color: 'bg-green-500',
          action: () => navigate('/admin/analytics')
        },
        {
          name: 'User Management',
          description: 'Manage user accounts',
          icon: UserGroupIcon,
          color: 'bg-purple-500',
          action: () => navigate('/admin/users')
        },
        {
          name: 'System Settings',
          description: 'Configure platform settings',
          icon: CogIcon,
          color: 'bg-orange-500',
          action: () => navigate('/admin/settings')
        }
      ];
    }

    return [];
  };

  const actions = getActionsForRole();

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
      </div>
      <div className="p-6">
        <div className="space-y-3">
          {actions.map((action) => (
            <button
              key={action.name}
              onClick={action.action}
              className="w-full flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-150"
            >
              <div className={`p-2 rounded-lg ${action.color}`}>
                <action.icon className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-sm font-medium text-gray-900">
                  {action.name}
                </div>
                <div className="text-xs text-gray-500">
                  {action.description}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
