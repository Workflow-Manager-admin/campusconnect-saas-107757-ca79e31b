import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const JobFilters = ({ filters, onFilterChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ [name]: value });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            name="search"
            placeholder="Search jobs..."
            value={filters.search}
            onChange={handleInputChange}
            className="pl-10 w-full rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>

        <select
          name="department"
          value={filters.department}
          onChange={handleInputChange}
          className="rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        >
          <option value="">All Departments</option>
          <option value="computer_science">Computer Science</option>
          <option value="electronics">Electronics</option>
          <option value="mechanical">Mechanical</option>
          <option value="civil">Civil</option>
        </select>

        <select
          name="type"
          value={filters.type}
          onChange={handleInputChange}
          className="rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        >
          <option value="">All Job Types</option>
          <option value="full_time">Full Time</option>
          <option value="internship">Internship</option>
        </select>

        <select
          name="sort"
          value={filters.sort}
          onChange={handleInputChange}
          className="rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        >
          <option value="latest">Latest First</option>
          <option value="salary_high">Highest Salary</option>
          <option value="applications">Most Applications</option>
        </select>
      </div>
    </div>
  );
};

export default JobFilters;
