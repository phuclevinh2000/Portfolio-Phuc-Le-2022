import './SettingPanel.scss';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import SwitchButton from '../SwitchButton/SwitchButton';

const SettingPanel = () => {
  const isOpenSetting = useSelector(
    (state: RootState) => state.setting.isOpened
  );
  return (
    <div className={`pf-settingPanel ${isOpenSetting && 'active'}`}>
      <SwitchButton />
    </div>
  );
};

export default SettingPanel;
