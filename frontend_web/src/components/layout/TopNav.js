import { BellIcon } from '@heroicons/react/24/outline';

const TopNav = ({ userRole, userName }) => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="px-4 py-3 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Welcome, {userName}</h2>
          <p className="text-sm text-gray-500 capitalize">{userRole}</p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Notifications"
          >
            <BellIcon className="w-6 h-6" />
          </button>
          <button
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
            onClick={() => {/* Add logout handler */}}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
