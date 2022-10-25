import './Skills.scss';
import { useEffect, useState } from 'react';
import { openClosePageMenu } from '../../redux/setting/settingSlide';
import { useDispatch } from 'react-redux';
import routes from '../../data/routes';
import { NavLink, useLocation } from 'react-router-dom';
import { categories, skills } from '../../data/skills';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const selectedPageData = routes.find((route) => route.path === pathname);
  const [fullscreen, setFullscreen] = useState(false);
  const [filters, setFilters] = useState<string[]>([]);

  const handleSetFilterClick = (option: string) => {
    // Check if the filter option has been in the array yet, if not then add, if already exist then clear the filter option.
    const checkHasFilterYet = filters.find((filter) => filter === option);
    if (!checkHasFilterYet) {
      setFilters((oldArray) => [...oldArray, option]);
    } else {
      setFilters(filters.filter((item) => item !== option));
    }
  };

  const filteredSkills =
    filters.length === 0
      ? skills
      : skills.filter((skill) =>
          filters.some((filter) => filter === skill.category)
        );

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
      <motion.div layoutId={selectedPageData?.path} className='pf-skills'>
        <motion.div className='pf-skills-header'>
          <motion.div className='pf-skills-header-left'>
            {selectedPageData?.title}
          </motion.div>
          <motion.div className='pf-skills-header-right'>
            <motion.button
              onClick={fullscreenHandler}
              className='pf-skills-header-right-fullscreen-button'
            ></motion.button>
            <NavLink to='/'>
              <motion.button className='pf-skills-header-right-close-button'></motion.button>
            </NavLink>
          </motion.div>
        </motion.div>
        <motion.div className='pf-skills-body'>
          <motion.div className='pf-skills-body-category'>
            {categories.map((category) => (
              <motion.button
                onClick={() => handleSetFilterClick(category)}
                className={`pf-skills-body-category-button ${
                  filters.find((filter) => filter === category) && 'active'
                }`}
                key={category}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
          <motion.ul className='pf-skills-body-toollist'>
            {filteredSkills.map((skill) => (
              <motion.li
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                layout
                key={skill.code}
              >
                <motion.a href={skill.url} target='_blank' rel='noreferrer'>
                  <motion.div
                    className='pf-skills-body-toolPic'
                    style={{ backgroundColor: `${skill.color}` }}
                  >
                    <motion.img
                      src={`./assets/icons/skills-${skill.code}.svg`}
                      alt={skill.name}
                    />
                  </motion.div>

                  <motion.span className='pf-skills-body-toolLabel'>
                    {skill.label}
                  </motion.span>
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Skills;
