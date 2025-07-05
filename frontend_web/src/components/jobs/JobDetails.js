import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { jobs, placementRounds } from '../../services/api';
import PlacementRounds from './PlacementRounds';

const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [rounds, setRounds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadJobDetails = async () => {
      try {
        setLoading(true);
        const [jobData, roundsData] = await Promise.all([
          jobs.getJobDetails(jobId),
          placementRounds.getRounds(jobId)
        ]);
        setJob(jobData);
        setRounds(roundsData);
      } catch (err) {
        setError('Failed to load job details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadJobDetails();
  }, [jobId]);

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-32 bg-gray-200 rounded"></div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">{error || 'Job not found'}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
            <p className="text-lg text-gray-600 mt-1">{job.company_name}</p>
          </div>
          <button
            onClick={async () => {
              try {
                await jobs.applyForJob(jobId);
                // Show success notification
              } catch (err) {
                // Show error notification
              }
            }}
            className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            Apply Now
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Job Details</h2>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm text-gray-500">Package</dt>
                <dd className="text-gray-900">{job.package_range}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Job Type</dt>
                <dd className="text-gray-900">{job.job_type}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Location</dt>
                <dd className="text-gray-900">{job.location}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Department</dt>
                <dd className="text-gray-900">{job.department}</dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Requirements</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <div className="prose max-w-none text-gray-600">
            {job.description}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Required Skills</h2>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <PlacementRounds rounds={rounds} jobId={jobId} />
    </div>
  );
};

export default JobDetails;
