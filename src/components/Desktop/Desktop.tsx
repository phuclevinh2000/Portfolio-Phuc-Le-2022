import { ReactNode } from 'react';
import './Desktop.scss';

type DesktopProps = {
  children: ReactNode;
};

const Desktop = ({ children }: DesktopProps) => {
  const taskbarHeight = 50;
  return (
    <section
      className='pf-desktop'
      style={{ height: `calc(100% - ${taskbarHeight}px)` }}
    >
      {children}
    </section>
  );
};

export default Desktop;
