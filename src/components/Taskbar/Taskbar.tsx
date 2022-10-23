import './Taskbar.scss';
import { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { openAndClose } from '../../redux/setting/settingSlide';
import ConnectTool from '../ConnectTool/ConnectTool';
import SettingPanel from '../SettingPanel/SettingPanel';
import { useLocation } from 'react-router-dom';
import routes from '../../data/routes';

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

  return (
    <div className='pf-bottom'>
      <ConnectTool />

      <SettingPanel />

      <div className='pf-taskbar'>
        <div className='pf-taskbar-left'>
          <img
            onClick={handleOpenSetting}
            className={`pf-screw-setting-icon ${isOpenSetting && 'active'}`}
            src='./assets/icons/screws-setting.svg'
            alt='setting'
          />
          <div
            className={`pf-taskbar-openPage ${pathname !== '/' && 'active'}`}
          >
            <img
              onClick={handleOpenSetting}
              className={`pf-page-icon`}
              src={`./assets/icons/home-${
                pathname !== '/' ? pathname.substring(1) : 'about'
              }.svg`}
              alt='setting'
            />
            <p>{selectedPageData?.title}</p>
          </div>
        </div>
        <p>Made by Phuc Le in 2022</p>
      </div>
    </div>
  );
};

export default Taskbar;
