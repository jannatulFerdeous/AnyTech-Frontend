import { Outlet } from 'react-router-dom';

import { LayoutProps } from './config/types';

import Navbar from '../common/widgets/Navbar/Navbar';


const Layout: React.FC<LayoutProps> = () => {
  return (
    <div id="dashboard">
      <div className="flex">
    
        <div className="flex-1 px-5 pt-5 pb-10 dark:bg-gray-600">
          <div className="pb-5">
            <Navbar />
          </div>
          <div className="mt-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
