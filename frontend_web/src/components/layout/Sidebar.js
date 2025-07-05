import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  HomeIcon, 
  BriefcaseIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  CogIcon,
  CalendarIcon,
  DocumentTextIcon,
  BellIcon
} from '@heroicons/react/24/outline';

// PUBLIC_INTERFACE
const Sidebar = ({ userRole, sidebarOpen, setSidebarOpen }) => {
  const getNavigationItems = () => {
    const baseItems = [
      { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    ];

    if (userRole === 'student') {
      return [
        ...baseItems,
        { name: 'Job Board', href: '/student/jobs', icon: BriefcaseIcon },
        { name: 'My Applications', href: '/student/applications', icon: DocumentTextIcon },
        { name: 'Placement Rounds', href: '/student/rounds', icon: CalendarIcon },
        { name: 'Profile', href: '/student/profile', icon: UserGroupIcon },
        { name: 'Notifications', href: '/student/notifications', icon: BellIcon },
      ];
    } else if (userRole === 'tpo') {
      return [
        ...baseItems,
        { name: 'Students', href: '/tpo/students', icon: UserGroupIcon },
        { name: 'Job Management', href: '/tpo/jobs', icon: BriefcaseIcon },
        { name: 'Placement Rounds', href: '/tpo/rounds', icon: CalendarIcon },
        { name: 'Analytics', href: '/tpo/analytics', icon: ChartBarIcon },
        { name: 'Reports', href: '/tpo/reports', icon: DocumentTextIcon },
        { name: 'Settings', href: '/tpo/settings', icon: CogIcon },
      ];
    } else if (userRole === 'super_admin') {
      return [
        ...baseItems,
        { name: 'Colleges', href: '/admin/colleges', icon: UserGroupIcon },
        { name: 'System Analytics', href: '/admin/analytics', icon: ChartBarIcon },
        { name: 'User Management', href: '/admin/users', icon: UserGroupIcon },
        { name: 'System Settings', href: '/admin/settings', icon: CogIcon },
        { name: 'Audit Logs', href: '/admin/logs', icon: DocumentTextIcon },
      ];
    }

    return baseItems;
  };

  const navigationItems = getNavigationItems();

  return (
    <>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-center h-16 bg-blue-600">
          <h1 className="text-white text-xl font-bold">Campus Connect</h1>
        </div>
        
        <nav className="mt-8">
          <div className="px-4 space-y-2">
            {navigationItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `group flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                    isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
