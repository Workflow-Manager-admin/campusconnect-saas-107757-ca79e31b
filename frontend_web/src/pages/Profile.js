import { useAuth } from '../contexts/AuthContext';
import StudentProfile from '../components/profile/StudentProfile';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Profile Management</h1>
      </div>

      {user?.role === 'student' ? (
        <StudentProfile />
      ) : (
        <div className="text-center p-6">
          <p className="text-gray-500">Profile management for {user?.role} role is not available yet</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
