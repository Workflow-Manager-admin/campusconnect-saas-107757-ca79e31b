import {
  BriefcaseIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
import DashboardCard from '../shared/DashboardCard';

const StudentDashboard = () => {
  // TODO: Replace with actual data from API
  const dashboardData = {
    activeApplications: 5,
    upcomingInterviews: 3,
    savedJobs: 12,
    placementRounds: 2
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Active Applications"
          value={dashboardData.activeApplications}
          icon={ClipboardDocumentCheckIcon}
          description="Applications in progress"
        />
        <DashboardCard
          title="Upcoming Interviews"
          value={dashboardData.upcomingInterviews}
          icon={CalendarIcon}
          description="Next 7 days"
        />
        <DashboardCard
          title="Saved Jobs"
          value={dashboardData.savedJobs}
          icon={BriefcaseIcon}
          description="Jobs you're interested in"
        />
        <DashboardCard
          title="Placement Rounds"
          value={dashboardData.placementRounds}
          icon={UserGroupIcon}
          description="Active rounds"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Applications */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Applications</h2>
          <div className="space-y-4">
            {/* TODO: Replace with actual data */}
            <p className="text-gray-500">No recent applications</p>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {/* TODO: Replace with actual data */}
            <p className="text-gray-500">No upcoming events</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
