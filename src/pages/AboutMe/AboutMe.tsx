import './AboutMe.scss';
import { useEffect, useState } from 'react';
import { openClosePageMenu } from '../../redux/setting/settingSlide';
import { useDispatch } from 'react-redux';
import routes from '../../data/routes';
import { NavLink, useLocation } from 'react-router-dom';
import CVAndEmail from '../../components/CVAndEmail/CVAndResume';
import { aboutMeData } from '../../data/aboutMeData';
import { motion, AnimatePresence } from 'framer-motion';

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
    <AnimatePresence>
      <motion.div layoutId={selectedPageData?.path} className='pf-aboutme'>
        <motion.div className='pf-aboutme-header'>
          <motion.div className='pf-aboutme-header-left'>
            {selectedPageData?.title}
          </motion.div>
          <motion.div className='pf-aboutme-header-right'>
            <motion.button
              onClick={fullscreenHandler}
              className='pf-aboutme-header-right-fullscreen-button'
            ></motion.button>
            <NavLink to='/'>
              <button className='pf-aboutme-header-right-close-button'></button>
            </NavLink>
          </motion.div>
        </motion.div>
        <motion.div className='pf-aboutme-content'>
          <motion.div className='pf-aboutme-content-left'>
            <motion.img
              className='pf-profile-pic'
              src={`./assets/icons/profile-pic.jpg`}
              alt='profile picuture'
            />
            <CVAndEmail />
          </motion.div>
          <motion.div className='pf-aboutme-content-right'>
            <motion.div className='pf-aboutme-content-right-header'>
              <motion.h2 className='pf-aboutme-content-right-title'>
                Hello, I'm <span className='pf-aboutme-name'>Phuc</span>
              </motion.h2>
              <motion.p className='pf-aboutme-content-right-role'>
                {aboutMeData.role}
              </motion.p>
            </motion.div>

            <motion.p className='pf-aboutme-content-right-description'>
              {aboutMeData.description}
            </motion.p>

            <motion.div className='pf-aboutme-content-right-facts-and-trivias'>
              <motion.div className='pf-aboutme-link'>
                <NavLink to='/work'>
                  <motion.h5>
                    Explore <span>my work</span>
                  </motion.h5>
                </NavLink>
              </motion.div>
              <motion.div className='pf-aboutme-link'>
                <NavLink to='/skills'>
                  <h5>
                    Know more about <span>my skills</span>
                  </h5>
                </NavLink>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutMe;
