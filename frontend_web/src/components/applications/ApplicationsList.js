import { useState, useEffect } from 'react';
import { applications } from '../../services/api';

const ApplicationsList = () => {
  const [applicationsList, setApplicationsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadApplications = async () => {
      try {
        setLoading(true);
        const data = await applications.getMyApplications();
        setApplicationsList(data);
      } catch (error) {
        console.error('Failed to load applications:', error);
      } finally {
        setLoading(false);
      }
    };

    loadApplications();
  }, []);

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      accepted: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800',
      withdrawn: 'bg-gray-100 text-gray-800',
      'in-progress': 'bg-blue-100 text-blue-800'
    };
    return colors[status] || colors.pending;
  };

  if (loading) {
    return (
      <div className="space-y-4 animate-pulse">
        {[1, 2, 3].map((n) => (
          <div key={n} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="h-5 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  if (applicationsList.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">You haven't applied to any jobs yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {applicationsList.map((application) => (
        <div
          key={application.id}
          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {application.job_title}
              </h3>
              <p className="text-gray-600 mt-1">{application.company_name}</p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                application.status
              )}`}
            >
              {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Applied On:</span>
              <span className="ml-2">
                {new Date(application.applied_date).toLocaleDateString()}
              </span>
            </div>
            <div>
              <span className="text-gray-500">Package:</span>
              <span className="ml-2">{application.package_offered}</span>
            </div>
            <div>
              <span className="text-gray-500">Current Round:</span>
              <span className="ml-2">{application.current_round}</span>
            </div>
            <div>
              <span className="text-gray-500">Next Round:</span>
              <span className="ml-2">
                {application.next_round || 'Not scheduled'}
              </span>
            </div>
          </div>

          {application.upcoming_round && (
            <div className="mt-4 p-4 bg-blue-50 rounded-md">
              <h4 className="text-sm font-medium text-blue-900">
                Upcoming: {application.upcoming_round.name}
              </h4>
              <p className="text-sm text-blue-600 mt-1">
                Date: {new Date(application.upcoming_round.date).toLocaleString()}
              </p>
              <p className="text-sm text-blue-600">
                Location: {application.upcoming_round.location}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ApplicationsList;
