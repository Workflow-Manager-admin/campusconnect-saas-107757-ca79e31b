import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

// Student-specific components (placeholders for now)
const StudentJobs = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Board</h2>
    <p className="text-gray-600">Browse and apply to available job opportunities.</p>
  </div>
);

const StudentApplications = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">My Applications</h2>
    <p className="text-gray-600">Track the status of your job applications.</p>
  </div>
);

const StudentRounds = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Placement Rounds</h2>
    <p className="text-gray-600">View your upcoming interview rounds and schedules.</p>
  </div>
);

const StudentProfile = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Profile</h2>
    <p className="text-gray-600">Update your profile information and documents.</p>
  </div>
);

const StudentNotifications = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Notifications</h2>
    <p className="text-gray-600">View all your notifications and updates.</p>
  </div>
);

// PUBLIC_INTERFACE
const StudentDashboard = () => {
  return (
    <Routes>
      <Route index element={<Dashboard userRole="student" />} />
      <Route path="jobs" element={<StudentJobs />} />
      <Route path="applications" element={<StudentApplications />} />
      <Route path="rounds" element={<StudentRounds />} />
      <Route path="profile" element={<StudentProfile />} />
      <Route path="notifications" element={<StudentNotifications />} />
    </Routes>
  );
};

export default StudentDashboard;
