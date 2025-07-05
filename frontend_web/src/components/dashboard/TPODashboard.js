import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

// TPO-specific components (placeholders for now)
const TPOStudents = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Student Management</h2>
    <p className="text-gray-600">Manage student profiles and bulk import students.</p>
  </div>
);

const TPOJobs = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Management</h2>
    <p className="text-gray-600">Create and manage job postings for your college.</p>
  </div>
);

const TPORounds = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Placement Rounds</h2>
    <p className="text-gray-600">Manage placement rounds and interview schedules.</p>
  </div>
);

const TPOAnalytics = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Analytics</h2>
    <p className="text-gray-600">View placement statistics and analytics.</p>
  </div>
);

const TPOReports = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Reports</h2>
    <p className="text-gray-600">Generate and download placement reports.</p>
  </div>
);

const TPOSettings = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Settings</h2>
    <p className="text-gray-600">Configure system settings and preferences.</p>
  </div>
);

// PUBLIC_INTERFACE
const TPODashboard = () => {
  return (
    <Routes>
      <Route index element={<Dashboard userRole="tpo" />} />
      <Route path="students" element={<TPOStudents />} />
      <Route path="students/add" element={<TPOStudents />} />
      <Route path="jobs" element={<TPOJobs />} />
      <Route path="jobs/create" element={<TPOJobs />} />
      <Route path="rounds" element={<TPORounds />} />
      <Route path="analytics" element={<TPOAnalytics />} />
      <Route path="reports" element={<TPOReports />} />
      <Route path="settings" element={<TPOSettings />} />
    </Routes>
  );
};

export default TPODashboard;
