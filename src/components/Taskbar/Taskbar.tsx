import './Taskbar.scss';
import { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';

const Taskbar = () => {
  const [isOpenSetting, setIsOpenSetting] = useState(true);
  const [isOpenContact, setIsOpenContact] = useState(false);

  const handleOpenSetting = () => {
    setIsOpenSetting(!isOpenSetting);
  };

  const handleOpenContact = () => {
    setIsOpenContact(!isOpenContact);
  };

  return (
    <div className='pf-bottom'>
      <div className='pf-connect-tool'>
        <a
          rel='noreferrer'
          target='_blank'
          href='https://github.com/phuclevinh2000'
          className={`pf-connect-tool-github ${isOpenContact && 'active'}`}
        >
          <GitHubIcon style={{ fontSize: 25 }} />
        </a>

        <a
          rel='noreferrer'
          target='_blank'
          href='https://www.linkedin.com/in/phuc-le-vinh/'
          className={`pf-connect-tool-linkedln ${isOpenContact && 'active'}`}
        >
          <LinkedInIcon style={{ fontSize: 25 }} />
        </a>

        <a
          rel='noreferrer'
          target='_blank'
          href='https://www.facebook.com/levinhphuc.le.9'
          className={`pf-connect-tool-facebook ${isOpenContact && 'active'}`}
        >
          <FacebookIcon style={{ fontSize: 25 }} />
        </a>

        <a
          rel='noreferrer'
          target='_blank'
          href='https://github.com/phuclevinh2000/Portfolio-Phuc-Le-2022'
          className={`pf-connect-tool-code ${isOpenContact && 'active'}`}
        >
          <CodeIcon style={{ fontSize: 25 }} />
        </a>
      </div>
      <div className='pf-connect'>
        <Hamburger
          color='black'
          size={30}
          toggled={isOpenContact}
          toggle={handleOpenContact}
        />
      </div>

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
