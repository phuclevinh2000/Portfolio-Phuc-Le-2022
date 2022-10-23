import './Taskbar.scss';
import { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { openAndClose } from '../../redux/setting/settingSlide';
import ConnectTool from '../ConnectTool/ConnectTool';
import SettingPanel from '../SettingPanel/SettingPanel';

const Taskbar = () => {
  const isOpenSetting = useSelector(
    (state: RootState) => state.setting.isOpened
  );
  const dispatch = useDispatch();

  const handleOpenSetting = () => {
    dispatch(openAndClose());
  };

  return (
    <div className='pf-bottom'>
      <ConnectTool />

      <SettingPanel />

      <div className='pf-taskbar'>
        <img
          onClick={handleOpenSetting}
          className={`pf-screw-setting-icon ${isOpenSetting && 'active'}`}
          src='./assets/icons/screws-setting.svg'
          alt='setting'
        />
        <p>Made by Phuc Le in 2022</p>
      </div>
    </div>
  );
};

export default Taskbar;
