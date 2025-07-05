import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  AcademicCapIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  UserGroupIcon,
  CalendarIcon,
  Cog6ToothIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline';

const getNavItems = (role) => {
  const commonItems = [
    { name: 'Dashboard', path: '/dashboard', icon: ChartBarIcon },
    { name: 'Profile', path: '/profile', icon: UserGroupIcon },
  ];

  const roleSpecificItems = {
    student: [
      { name: 'Job Board', path: '/jobs', icon: BriefcaseIcon },
      { name: 'Applications', path: '/applications', icon: CalendarIcon },
    ],
    tpo: [
      { name: 'Students', path: '/students', icon: AcademicCapIcon },
      { name: 'Companies', path: '/companies', icon: BuildingOfficeIcon },
      { name: 'Placements', path: '/placements', icon: CalendarIcon },
    ],
    admin: [
      { name: 'Colleges', path: '/colleges', icon: BuildingOfficeIcon },
      { name: 'Analytics', path: '/analytics', icon: ChartBarIcon },
      { name: 'Settings', path: '/settings', icon: Cog6ToothIcon },
    ],
  };

  return [...commonItems, ...(roleSpecificItems[role] || [])];
};

const Sidebar = ({ userRole = 'student' }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navItems = getNavItems(userRole);

  return (
    <aside className={`bg-secondary min-h-screen transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="p-4">
        <h1 className={`text-xl font-bold ${isCollapsed ? 'hidden' : 'block'}`}>
          CampusConnect
        </h1>
      </div>
      <nav className="mt-8">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-1 transition-colors duration-200
              ${isActive ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'}`
            }
          >
            <item.icon className="w-6 h-6" />
            {!isCollapsed && <span className="ml-3">{item.name}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
