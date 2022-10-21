import './Home.scss';
import Desktop from '../../components/Desktop/Desktop';
import Taskbar from '../../components/Taskbar/Taskbar';

const Home = () => {
  return (
    <main className='pf-main'>
      <Desktop>Dummy text</Desktop>
      <Taskbar />
    </main>
  );
};

export default Home;
