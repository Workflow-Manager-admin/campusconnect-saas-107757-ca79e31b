import { BriefcaseIcon, BuildingOfficeIcon, CurrencyRupeeIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { jobs } from '../../services/api';

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const handleApply = async (e) => {
    e.stopPropagation();
    try {
      await jobs.applyForJob(job.id);
      // Show success notification or update UI
    } catch (error) {
      console.error('Failed to apply:', error);
      // Show error notification
    }
  };

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => navigate(`/jobs/${job.id}`)}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
          <div className="flex items-center text-gray-600 mt-1">
            <BuildingOfficeIcon className="w-4 h-4 mr-1" />
            <span className="text-sm">{job.company_name}</span>
          </div>
        </div>
        <button
          onClick={handleApply}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
        >
          Apply Now
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex items-center text-gray-600">
          <BriefcaseIcon className="w-4 h-4 mr-2" />
          <span className="text-sm">{job.job_type}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <CurrencyRupeeIcon className="w-4 h-4 mr-2" />
          <span className="text-sm">{job.package_range}</span>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
        <span>Posted {new Date(job.posted_date).toLocaleDateString()}</span>
        <span>{job.applications_count} applications</span>
      </div>
    </div>
  );
};

export default JobCard;
