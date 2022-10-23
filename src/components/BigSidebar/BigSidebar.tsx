import './BigSidebar.scss';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import routes from '../../data/routes';
import { NavLink, useLocation } from 'react-router-dom';

const BigSidebar = () => {
  const isOpenPageMenu = useSelector(
    (state: RootState) => state.setting.isOpeningPageMenu
  );

  // const location = useLocation();

  return (
    <div className={`pf-bigsidebar ${isOpenPageMenu && 'active'}`}>
      {routes.map((route) => (
        <NavLink
          to={route.path}
          className={(navData: { isActive: any }) =>
            navData.isActive ? 'pf-sidebar-card active' : 'pf-sidebar-card'
          }
        >
          <span className={`pf-sidebar-selected`}></span>
          <img
            className='pf-sidebar-card-icon'
            src={`./assets/icons/${route.icon}.svg`}
            alt={route.title}
          />
        </NavLink>
      ))}
    </div>
  );
};

export default BigSidebar;
