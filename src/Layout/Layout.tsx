import { Outlet } from 'react-router-dom';

import { LayoutProps } from './config/types';

import Navbar from '../common/widgets/Navbar/Navbar';
import Footer from '../common/widgets/Footer/Footer';

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div id="dashboard">
      <div className="flex m-0">
        <div className="flex-1 dark:bg-gray-600 relative">
          {/* Navbar should have absolute positioning */}
          <div className="absolute top-0 left-0 right-0 z-50">
            <Navbar />
          </div>

          {/* Content should be pushed down so it doesn't overlap Navbar */}
          <div className="">
            <Outlet />
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Layout;
