import './AboutMe.scss';
import { useEffect, useState } from 'react';
import { openClosePageMenu } from '../../redux/setting/settingSlide';
import { useDispatch } from 'react-redux';
import routes from '../../data/routes';
import { NavLink, useLocation } from 'react-router-dom';
import CVAndEmail from '../../components/CVAndEmail/CVAndResume';
import { aboutMeData } from '../../data/aboutMeData';

const AboutMe = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
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

  const selectedPageData = routes.find((route) => route.path === pathname);

  useEffect(() => {
    dispatch(openClosePageMenu(true));
  }, [dispatch]);
  return (
    <div className={`pf-aboutme`}>
      <div className='pf-aboutme-header'>
        <div className='pf-aboutme-header-left'>{selectedPageData?.title}</div>
        <div className='pf-aboutme-header-right'>
          <button
            onClick={fullscreenHandler}
            className='pf-aboutme-header-right-fullscreen-button'
          ></button>
          <NavLink to='/'>
            <button className='pf-aboutme-header-right-close-button'></button>
          </NavLink>
        </div>
      </div>
      <div className='pf-aboutme-content'>
        <div className='pf-aboutme-content-left'>
          <img
            className='pf-profile-pic'
            src={`./assets/icons/profile-pic.jpg`}
            alt='profile picuture'
          />
          <CVAndEmail />
        </div>
        <div className='pf-aboutme-content-right'>
          <div className='pf-aboutme-content-right-header'>
            <h2 className='pf-aboutme-content-right-title'>
              Hello, I'm <span className='pf-aboutme-name'>Phuc</span>
            </h2>
            <p className='pf-aboutme-content-right-role'>{aboutMeData.role}</p>
          </div>

          <p className='pf-aboutme-content-right-description'>
            {aboutMeData.description}
          </p>

          <ul className='pf-aboutme-content-right-facts-and-trivias'>
            <h3>some facts</h3>
            {aboutMeData.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>

          <ul className='pf-aboutme-content-right-facts-and-trivias'>
            <h3>some trivias</h3>
            {aboutMeData.trivias.map((trivia) => (
              <li key={trivia}>{trivia}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
