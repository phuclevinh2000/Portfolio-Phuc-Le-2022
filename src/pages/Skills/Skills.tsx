import './Skills.scss';
import { useEffect } from 'react';
import { openClosePageMenu } from '../../redux/setting/settingSlide';
import { useDispatch } from 'react-redux';
import routes from '../../data/routes';
import { NavLink, useLocation } from 'react-router-dom';

const Skills = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const selectedPageData = routes.find((route) => route.path === pathname);

  useEffect(() => {
    dispatch(openClosePageMenu(true));
  }, [dispatch]);
  return (
    <div className='pf-skills'>
      <div className='pf-skills-header'>
        <div className='pf-skills-header-left'>{selectedPageData?.title}</div>
        <div className='pf-skills-header-right'>
          <NavLink to='/'>
            <button className='pf-skills-header-right'></button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Skills;
