import {
  BuildingOfficeIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline';
import DashboardCard from '../shared/DashboardCard';

const SuperAdminDashboard = () => {
  // TODO: Replace with actual data from API
  const dashboardData = {
    totalColleges: 25,
    totalStudents: 12500,
    totalPlacements: 4500,
    averagePackage: '8.5L'
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Colleges"
          value={dashboardData.totalColleges}
          icon={BuildingOfficeIcon}
          description="Registered institutions"
        />
        <DashboardCard
          title="Total Students"
          value={dashboardData.totalStudents}
          icon={UserGroupIcon}
          description="Across all colleges"
        />
        <DashboardCard
          title="Total Placements"
          value={dashboardData.totalPlacements}
          icon={AcademicCapIcon}
          trend={8}
          description="This academic year"
        />
        <DashboardCard
          title="Average Package"
          value={dashboardData.averagePackage}
          icon={BanknotesIcon}
          description="Annual CTC"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* College Performance */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">College Performance</h2>
          <div className="space-y-4">
            {/* TODO: Replace with actual data */}
            <p className="text-gray-500">No performance data available</p>
          </div>
        </div>

        {/* System Status */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">System Status</h2>
          <div className="space-y-4">
            {/* TODO: Replace with actual data */}
            <p className="text-gray-500">All systems operational</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
