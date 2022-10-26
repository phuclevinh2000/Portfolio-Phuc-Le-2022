import './Work.scss';
import { useEffect, useState } from 'react';
import { openClosePageMenu } from '../../redux/setting/settingSlide';
import { useDispatch } from 'react-redux';
import routes from '../../data/routes';
import {
  workAndProject,
  careerType,
  sideProject,
} from '../../data/workProject';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Work = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const [fullscreen, setFullscreen] = useState(false);
  const selectedPageData = routes.find((route) => route.path === pathname);
  const [selectingWork, setSelectingWork] = useState<any>({});

  const handleSelectingWork = (job: careerType | sideProject) => {
    setSelectingWork(job);
  };

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
      <motion.div layoutId={selectedPageData?.path} className='pf-work'>
        <motion.div className='pf-work-header'>
          <motion.div className='pf-work-header-left'>
            {selectedPageData?.title}
          </motion.div>
          <motion.div className='pf-work-header-right'>
            <motion.button
              onClick={fullscreenHandler}
              className='pf-work-header-right-fullscreen-button'
            ></motion.button>
            <NavLink to='/'>
              <motion.button className='pf-work-header-right-close-button'></motion.button>
            </NavLink>
          </motion.div>
        </motion.div>
        <motion.div className='pf-work-body'>
          <motion.div className='pf-work-body-left'>
            <motion.ul className='pf-work-body-left-folder'>
              <div className='pf-career'>
                <motion.h3 className='pf-work-body-left-title'>
                  Careers
                </motion.h3>
                {workAndProject.careers.map((job) => (
                  <motion.li
                    className={`pf-folder ${
                      selectingWork.id === job.id && 'active'
                    }`}
                    key={job.id}
                    onClick={() => handleSelectingWork(job)}
                  >
                    <motion.button className='pf-work-body-folder-button'>
                      <motion.img
                        src={`./assets/icons/workFolder-${
                          selectingWork.id === job.id ? 'open' : 'close'
                        }.svg`}
                        alt='Folder Icon'
                      />
                      <motion.p>{job.name}</motion.p>
                    </motion.button>
                  </motion.li>
                ))}
              </div>

              <div className='pf-sidework'>
                <h3
                  style={{ paddingTop: '20px' }}
                  className='pf-work-body-left-title'
                >
                  Side Works
                </h3>
                {workAndProject.sideProject.map((project) => (
                  <li
                    className={`pf-folder ${
                      selectingWork.id === project.id && 'active'
                    }`}
                    key={project.id}
                    onClick={() => handleSelectingWork(project)}
                  >
                    <button className='pf-work-body-folder-button'>
                      <img
                        src={`./assets/icons/workFolder-${
                          selectingWork.id === project.id ? 'open' : 'close'
                        }.svg`}
                        alt='Folder Icon'
                      />
                      <p>{project.name}</p>
                    </button>
                  </li>
                ))}
              </div>
            </motion.ul>
          </motion.div>
          <motion.div
            className={`pf-work-body-right ${
              Object.keys(selectingWork).length === 0 && 'empty'
            }`}
          >
            {Object.keys(selectingWork).length === 0 ? (
              <div className='pf-work-body-right-empty'>
                Select a folder to view
              </div>
            ) : (
              <div>
                <h2 className='pf-work-body-right-title'>
                  {selectingWork.name}
                </h2>
                <p className='pf-work-time'>{selectingWork.duration}</p>
                <p className='pf-work-description'>
                  {selectingWork.description}
                </p>

                <p style={{ marginBottom: '8px', marginTop: '16px' }}>
                  My main activities include:
                </p>
                <ul className='pf-work-list'>
                  {selectingWork.mainTask.map((work: any) => (
                    <li key={work.name}>{work}</li>
                  ))}
                </ul>
                <p className='pf-work-tech-used'>
                  Technology used:{' '}
                  {selectingWork.techUsed.map((tech: string) => (
                    <span>{tech}, </span>
                  ))}
                </p>
                <div className='pf-work-demo-and-source'>
                  {selectingWork.demo && (
                    <a
                      href={selectingWork.demo}
                      target='_blank'
                      rel='noreferrer'
                      className='pf-work-demo'
                    >
                      DEMO
                    </a>
                  )}
                  <a
                    href={selectingWork.github}
                    target='_blank'
                    rel='noreferrer'
                    className='pf-work-demo'
                  >
                    SOURCE CODE
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Work;
