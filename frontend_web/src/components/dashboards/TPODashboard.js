import {
  UserGroupIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import DashboardCard from '../shared/DashboardCard';

const TPODashboard = () => {
  // TODO: Replace with actual data from API
  const dashboardData = {
    totalStudents: 450,
    activeCompanies: 15,
    ongoingPlacements: 8,
    placementRate: 75
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Students"
          value={dashboardData.totalStudents}
          icon={UserGroupIcon}
          description="Registered students"
        />
        <DashboardCard
          title="Active Companies"
          value={dashboardData.activeCompanies}
          icon={BuildingOfficeIcon}
          description="Currently recruiting"
        />
        <DashboardCard
          title="Ongoing Placements"
          value={dashboardData.ongoingPlacements}
          icon={AcademicCapIcon}
          description="Active placement drives"
        />
        <DashboardCard
          title="Placement Rate"
          value={`${dashboardData.placementRate}%`}
          icon={ChartBarIcon}
          trend={5}
          description="vs last month"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Placement Activities */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Placement Activities</h2>
          <div className="space-y-4">
            {/* TODO: Replace with actual data */}
            <p className="text-gray-500">No recent activities</p>
          </div>
        </div>

        {/* Upcoming Drives */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Upcoming Drives</h2>
          <div className="space-y-4">
            {/* TODO: Replace with actual data */}
            <p className="text-gray-500">No upcoming drives</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TPODashboard;
