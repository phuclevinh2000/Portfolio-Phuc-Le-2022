import './Hobby.scss';
import { useEffect } from 'react';
import { openClosePageMenu } from '../../redux/setting/settingSlide';
import { useDispatch } from 'react-redux';
import routes from '../../data/routes';
import { NavLink, useLocation } from 'react-router-dom';

const Hobby = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const selectedPageData = routes.find((route) => route.path === pathname);

  useEffect(() => {
    dispatch(openClosePageMenu(true));
  }, [dispatch]);
  return (
    <div className='pf-hobby'>
      <div className='pf-hobby-header'>
        <div className='pf-hobby-header-left'>{selectedPageData?.title}</div>
        <div className='pf-hobby-header-right'>
          <NavLink to='/'>
            <button className='pf-hobby-header-right'></button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hobby;
