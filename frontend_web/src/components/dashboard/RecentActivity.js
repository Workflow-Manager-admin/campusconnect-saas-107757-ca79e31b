import React from 'react';
import { 
  BriefcaseIcon,
  UserIcon,
  CalendarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

// PUBLIC_INTERFACE
const RecentActivity = ({ userRole }) => {
  const getActivitiesForRole = () => {
    if (userRole === 'student') {
      return [
        {
          id: 1,
          title: 'Applied to Software Engineer at TechCorp',
          description: 'Your application has been submitted successfully',
          time: '2 hours ago',
          icon: BriefcaseIcon,
          color: 'bg-blue-500'
        },
        {
          id: 2,
          title: 'Interview scheduled with DataSoft',
          description: 'Technical interview on March 15, 2024 at 2:00 PM',
          time: '1 day ago',
          icon: CalendarIcon,
          color: 'bg-green-500'
        },
        {
          id: 3,
          title: 'Profile viewed by Google',
          description: 'A recruiter from Google viewed your profile',
          time: '2 days ago',
          icon: UserIcon,
          color: 'bg-purple-500'
        },
        {
          id: 4,
          title: 'Application status updated',
          description: 'Microsoft - Shortlisted for next round',
          time: '3 days ago',
          icon: CheckCircleIcon,
          color: 'bg-orange-500'
        }
      ];
    } else if (userRole === 'tpo') {
      return [
        {
          id: 1,
          title: 'New student registration',
          description: 'John Doe registered for placement portal',
          time: '1 hour ago',
          icon: UserIcon,
          color: 'bg-blue-500'
        },
        {
          id: 2,
          title: 'Job posting approved',
          description: 'Amazon SDE-1 position is now live',
          time: '3 hours ago',
          icon: BriefcaseIcon,
          color: 'bg-green-500'
        },
        {
          id: 3,
          title: 'Placement drive scheduled',
          description: 'Google campus recruitment - March 20, 2024',
          time: '1 day ago',
          icon: CalendarIcon,
          color: 'bg-purple-500'
        },
        {
          id: 4,
          title: 'Bulk email sent',
          description: 'Interview schedule sent to 45 students',
          time: '2 days ago',
          icon: CheckCircleIcon,
          color: 'bg-orange-500'
        }
      ];
    } else if (userRole === 'super_admin') {
      return [
        {
          id: 1,
          title: 'New college onboarded',
          description: 'MIT College of Engineering added to platform',
          time: '2 hours ago',
          icon: UserIcon,
          color: 'bg-blue-500'
        },
        {
          id: 2,
          title: 'System maintenance completed',
          description: 'Database optimization and security updates',
          time: '1 day ago',
          icon: CheckCircleIcon,
          color: 'bg-green-500'
        },
        {
          id: 3,
          title: 'Monthly report generated',
          description: 'System usage and placement statistics',
          time: '3 days ago',
          icon: CalendarIcon,
          color: 'bg-purple-500'
        },
        {
          id: 4,
          title: 'User activity spike detected',
          description: '150% increase in student registrations',
          time: '1 week ago',
          icon: BriefcaseIcon,
          color: 'bg-orange-500'
        }
      ];
    }

    return [];
  };

  const activities = getActivitiesForRole();

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg ${activity.color}`}>
                <activity.icon className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900">
                  {activity.title}
                </div>
                <div className="text-sm text-gray-500">
                  {activity.description}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {activity.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
