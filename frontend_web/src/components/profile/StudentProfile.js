import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { profile } from '../../services/api';

const StudentProfile = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    college: '',
    branch: '',
    yearOfGraduation: '',
    phone: '',
    resume: null,
    photo: null,
  });

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        const data = await profile.getProfile();
        setProfileData(prev => ({
          ...prev,
          ...data,
          // Don't override file inputs
          resume: prev.resume,
          photo: prev.photo
        }));
      } catch (err) {
        setError('Failed to load profile data');
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      // Validate file size (max 5MB)
      if (files[0].size > 5 * 1024 * 1024) {
        setError('File size should not exceed 5MB');
        return;
      }
      setProfileData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const { resume, photo, ...data } = profileData;
      
      // Upload documents if they exist
      if (resume) {
        await profile.uploadDocument(resume, 'resume');
      }
      if (photo) {
        await profile.uploadDocument(photo, 'photo');
      }
      
      // Update profile data
      await profile.updateProfile(data);
      setSuccess('Profile updated successfully');
    } catch (err) {
      setError(err.message || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Student Profile</h2>

      {error && (
        <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={profileData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={profileData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="college" className="block text-sm font-medium text-gray-700">
              College
            </label>
            <input
              type="text"
              id="college"
              name="college"
              required
              value={profileData.college}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="branch" className="block text-sm font-medium text-gray-700">
              Branch
            </label>
            <input
              type="text"
              id="branch"
              name="branch"
              required
              value={profileData.branch}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="yearOfGraduation" className="block text-sm font-medium text-gray-700">
              Year of Graduation
            </label>
            <input
              type="number"
              id="yearOfGraduation"
              name="yearOfGraduation"
              required
              min={2024}
              max={2030}
              value={profileData.yearOfGraduation}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={profileData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
              Resume (PDF, max 5MB)
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-primary file:text-white
                hover:file:bg-primary-dark"
            />
          </div>

          <div>
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
              Profile Photo (JPG/PNG, max 5MB)
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-primary file:text-white
                hover:file:bg-primary-dark"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save Profile'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentProfile;
