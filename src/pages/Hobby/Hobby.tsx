import './Hobby.scss';
import { useEffect, useState } from 'react';
import { openClosePageMenu } from '../../redux/setting/settingSlide';
import { useDispatch } from 'react-redux';
import routes from '../../data/routes';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { hobbyData } from '../../data/hobbyData';

const Hobby = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const selectedPageData = routes.find((route) => route.path === pathname);
  const [fullscreen, setFullscreen] = useState(false);
  const [selectingHobby, setSelectingHobby] = useState<any>({});

  const handleSelectingHobby = (hobby: any) => {
    setSelectingHobby(hobby);
  };

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
    <AnimatePresence>
      <motion.div layoutId={selectedPageData?.path} className='pf-hobby'>
        <div className='pf-hobby-header'>
          <div className='pf-hobby-header-left'>{selectedPageData?.title}</div>
          <div className='pf-hobby-header-right'>
            <motion.button
              onClick={fullscreenHandler}
              className='pf-hobby-header-right-fullscreen-button'
            ></motion.button>
            <NavLink to='/'>
              <button className='pf-hobby-header-right-close-button'></button>
            </NavLink>
          </div>
        </div>
        <div className='pf-hobby-body'>
          <div className='pf-hobby-body-left'>
            <motion.h3 className='pf-hobby-body-left-title'>
              My Free Time
            </motion.h3>
            <motion.ul className='pf-hobby-body-left-folder'>
              {hobbyData.map((hobby) => (
                <motion.li
                  className={`pf-folder ${
                    selectingHobby.id === hobby.id && 'active'
                  }`}
                  key={hobby.id}
                  onClick={() => handleSelectingHobby(hobby)}
                >
                  <motion.button className='pf-hobby-body-folder-button'>
                    <motion.img
                      src={`./assets/icons/workFolder-${
                        selectingHobby.id === hobby.id ? 'open' : 'close'
                      }.svg`}
                      alt='Folder Icon'
                    />
                    <motion.p>{hobby.name}</motion.p>
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div
            className={`pf-hobby-body-right ${
              Object.keys(selectingHobby).length === 0 && 'empty'
            }`}
          >
            {Object.keys(selectingHobby).length === 0 ? (
              <div className='pf-hobby-body-right-empty'>
                Select a folder to view
              </div>
            ) : (
              <div>
                <h2 className='pf-hobby-body-right-title'>
                  {selectingHobby.name}
                </h2>
                <p className='pf-hobby-description'>
                  {selectingHobby.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Hobby;
