import './Home.scss';
import { RootState } from '../../redux/store';
import { NavLink } from 'react-router-dom';
import Desktop from '../../components/Desktop/Desktop';
import routes from '../../data/routes';
import { openClosePageMenu } from '../../redux/setting/settingSlide';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const dispatch = useDispatch();
  const isOpenPageMenu = useSelector(
    (state: RootState) => state.setting.isOpeningPageMenu
  );

  useEffect(() => {
    dispatch(openClosePageMenu(false));
  }, [dispatch]);

  return (
    <main className='pf-main'>
      <Desktop>
        {!isOpenPageMenu &&
          routes.map((route) => (
            <motion.div key={route.code} layoutId={route.path}>
              <NavLink
                to={route.path}
                className='pf-main-card'
                onClick={() => dispatch(openClosePageMenu(true))}
              >
                <img
                  className='pf-main-card-icon'
                  src={`./assets/icons/${route.icon}.svg`}
                  alt={route.title}
                />
                <p>{route.title}</p>
              </NavLink>
            </motion.div>
          ))}
      </Desktop>
    </main>
  );
};

export default Home;
