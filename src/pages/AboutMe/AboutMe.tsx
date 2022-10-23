import './AboutMe.scss';
import { useEffect } from 'react';
import { openClosePageMenu } from '../../redux/setting/settingSlide';
import { useDispatch } from 'react-redux';
import routes from '../../data/routes';
import { NavLink, useLocation } from 'react-router-dom';

const AboutMe = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  console.log(location);

  const selectedPageData = routes.find((route) => route.path === pathname);

  useEffect(() => {
    dispatch(openClosePageMenu(true));
  }, [dispatch]);
  return (
    <div className={`pf-aboutme`}>
      <div className='pf-aboutme-header'>
        <div className='pf-aboutme-header-left'>{selectedPageData?.title}</div>
        <div className='pf-aboutme-header-right'>
          <NavLink to='/'>
            <button className='pf-aboutme-header-right'></button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
