import './Error.scss';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <main className='full-page'>
      <img src='./assets/icons/error-notfound.svg' alt='not found' />
      <Link className='link' to='/'>
        back home
      </Link>
    </main>
  );
};

export default Error;
