import Sidebar from './Sidebar';
import TopNav from './TopNav';

const MainLayout = ({ children, userRole = 'student', userName = 'User' }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userRole={userRole} />
      <div className="flex-1">
        <TopNav userRole={userRole} userName={userName} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
