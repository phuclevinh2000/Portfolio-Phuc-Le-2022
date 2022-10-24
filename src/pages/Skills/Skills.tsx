import './Skills.scss';
import { useEffect, useState } from 'react';
import { openClosePageMenu } from '../../redux/setting/settingSlide';
import { useDispatch } from 'react-redux';
import routes from '../../data/routes';
import { NavLink, useLocation } from 'react-router-dom';
import { categories, skills } from '../../data/skills';

const Skills = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const selectedPageData = routes.find((route) => route.path === pathname);
  const [fullscreen, setFullscreen] = useState(false);

  const fullscreenHandler = () => {
    if (!fullscreen) {
      setFullscreen(true);
      const e = document.documentElement;
      e.requestFullscreen();
    } else {
      setFullscreen(false);
      if (!document.exitFullscreen) {
        document.exitFullscreen();
        // @ts-ignore
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        // @ts-ignore
        document.webkitExitFullscreen();
        // @ts-ignore
      } else if (document.msExitFullscreen) {
        /* IE11 */
        // @ts-ignore
        document.msExitFullscreen();
      }
    }
  };

  useEffect(() => {
    dispatch(openClosePageMenu(true));
  }, [dispatch]);
  return (
    <div className='pf-skills'>
      <div className='pf-skills-header'>
        <div className='pf-skills-header-left'>{selectedPageData?.title}</div>
        <div className='pf-skills-header-right'>
          <button
            onClick={fullscreenHandler}
            className='pf-skills-header-right-fullscreen-button'
          ></button>
          <NavLink to='/'>
            <button className='pf-skills-header-right-close-button'></button>
          </NavLink>
        </div>
      </div>
      <div className='pf-skills-body'>
        <div className='pf-skills-body-category'>
          {categories.map((category) => (
            <button className='pf-skills-body-category-button' key={category}>
              {category}
            </button>
          ))}
        </div>
        <ul className='pf-skills-body-toollist'>
          {skills.map((skill) => (
            <li>
              <a href={skill.url} target='_blank' rel='noreferrer'>
                <div
                  className='pf-skills-body-toolPic'
                  style={{ backgroundColor: `${skill.color}` }}
                >
                  <img
                    src={`./assets/icons/skills-${skill.code}.svg`}
                    alt={skill.name}
                  />
                </div>

                <span className='pf-skills-body-toolLabel'>{skill.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
