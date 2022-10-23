import './SharedLayout.scss';
import { Outlet } from 'react-router-dom';
import BigSidebar from '../BigSidebar/BigSidebar';
import SmallSidebar from '../SmallSidebar/SmallSidebar';

const SharedLayout = () => {
  return (
    <main className='dashboard'>
      {/* <SmallSidebar /> */}
      <BigSidebar />
      <div className='dashboard-page'>
        <Outlet />
      </div>
    </main>
  );
};

export default SharedLayout;
