import React from 'react';
import { 
  BriefcaseIcon,
  UserGroupIcon,
  ChartBarIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

// PUBLIC_INTERFACE
const DashboardStats = ({ userRole }) => {
  const getStatsForRole = () => {
    if (userRole === 'student') {
      return [
        {
          name: 'Applications Submitted',
          value: '12',
          change: '+2 this week',
          changeType: 'increase',
          icon: BriefcaseIcon,
          color: 'bg-blue-500'
        },
        {
          name: 'Upcoming Rounds',
          value: '3',
          change: 'Next: Tomorrow',
          changeType: 'neutral',
          icon: CalendarIcon,
          color: 'bg-green-500'
        },
        {
          name: 'Profile Views',
          value: '45',
          change: '+12 this month',
          changeType: 'increase',
          icon: ChartBarIcon,
          color: 'bg-purple-500'
        },
        {
          name: 'Shortlisted',
          value: '5',
          change: '+1 this week',
          changeType: 'increase',
          icon: UserGroupIcon,
          color: 'bg-orange-500'
        }
      ];
    } else if (userRole === 'tpo') {
      return [
        {
          name: 'Active Students',
          value: '245',
          change: '+15 this month',
          changeType: 'increase',
          icon: UserGroupIcon,
          color: 'bg-blue-500'
        },
        {
          name: 'Job Postings',
          value: '18',
          change: '+3 this week',
          changeType: 'increase',
          icon: BriefcaseIcon,
          color: 'bg-green-500'
        },
        {
          name: 'Placement Rate',
          value: '78%',
          change: '+5% from last year',
          changeType: 'increase',
          icon: ChartBarIcon,
          color: 'bg-purple-500'
        },
        {
          name: 'Upcoming Rounds',
          value: '8',
          change: 'This week',
          changeType: 'neutral',
          icon: CalendarIcon,
          color: 'bg-orange-500'
        }
      ];
    } else if (userRole === 'super_admin') {
      return [
        {
          name: 'Total Colleges',
          value: '25',
          change: '+2 this month',
          changeType: 'increase',
          icon: UserGroupIcon,
          color: 'bg-blue-500'
        },
        {
          name: 'Active Users',
          value: '1,234',
          change: '+56 this week',
          changeType: 'increase',
          icon: UserGroupIcon,
          color: 'bg-green-500'
        },
        {
          name: 'System Usage',
          value: '92%',
          change: '+3% from last month',
          changeType: 'increase',
          icon: ChartBarIcon,
          color: 'bg-purple-500'
        },
        {
          name: 'Total Placements',
          value: '456',
          change: '+23 this month',
          changeType: 'increase',
          icon: BriefcaseIcon,
          color: 'bg-orange-500'
        }
      ];
    }

    return [];
  };

  const stats = getStatsForRole();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.name} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className={`p-3 rounded-lg ${stat.color}`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.name}</div>
            </div>
          </div>
          <div className="mt-4">
            <div className={`text-sm ${
              stat.changeType === 'increase' ? 'text-green-600' : 
              stat.changeType === 'decrease' ? 'text-red-600' : 'text-gray-600'
            }`}>
              {stat.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
