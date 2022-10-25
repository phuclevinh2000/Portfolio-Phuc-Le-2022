import './Taskbar.scss';
import { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { openAndClose } from '../../redux/setting/settingSlide';
import ConnectTool from '../ConnectTool/ConnectTool';
import SettingPanel from '../SettingPanel/SettingPanel';
import { useLocation } from 'react-router-dom';
import routes from '../../data/routes';
import { motion } from 'framer-motion';

const Taskbar = () => {
  const isOpenSetting = useSelector(
    (state: RootState) => state.setting.isOpened
  );
  const dispatch = useDispatch();

  const handleOpenSetting = () => {
    dispatch(openAndClose());
  };

  const location = useLocation();
  const { pathname } = location;
  const selectedPageData = routes.find((route) => route.path === pathname);
  console.log(pathname);

  const sringAnimation = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  return (
    <motion.div className='pf-bottom'>
      <ConnectTool />

      <SettingPanel />

      <motion.div className='pf-taskbar'>
        <motion.div className='pf-taskbar-left'>
          {(pathname === '/' ||
            pathname === '/work' ||
            pathname === '/skills' ||
            pathname === '/hobby' ||
            pathname === '/about') && (
            <motion.img
              onClick={handleOpenSetting}
              className={`pf-screw-setting-icon ${isOpenSetting && 'active'}`}
              src='./assets/icons/screws-setting.svg'
              alt='setting'
            />
          )}

          {(pathname === '/' ||
            pathname === '/work' ||
            pathname === '/skills' ||
            pathname === '/hobby' ||
            pathname === '/about') && (
            <motion.div
              className={`pf-taskbar-openPage ${pathname !== '/' && 'active'}`}
            >
              <motion.img
                layout
                transition={sringAnimation}
                onClick={handleOpenSetting}
                className={`pf-page-icon`}
                src={`./assets/icons/home-${
                  pathname !== '/' ? pathname.substring(1) : 'about'
                }.svg`}
                alt='setting'
              />
              <motion.p>{selectedPageData?.title}</motion.p>
            </motion.div>
          )}
        </motion.div>
        <motion.p>Made by Phuc Le in 2022</motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Taskbar;
