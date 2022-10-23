import './Work.scss';
import { useEffect } from 'react';
import { openClosePageMenu } from '../../redux/setting/settingSlide';
import { useDispatch } from 'react-redux';
import routes from '../../data/routes';
import { NavLink, useLocation } from 'react-router-dom';

const Work = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const selectedPageData = routes.find((route) => route.path === pathname);

  useEffect(() => {
    dispatch(openClosePageMenu(true));
  }, [dispatch]);
  return (
    <div className='pf-work'>
      <div className='pf-work-header'>
        <div className='pf-work-header-left'>{selectedPageData?.title}</div>
        <div className='pf-work-header-right'>
          <NavLink to='/'>
            <button className='pf-work-header-right'></button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Work;
