import './CVAndEmail.scss';

const CVAndEmail = () => {
  return (
    <div className='pf-cvAndEmail'>
      <a href='./assets/Phuc Le - CV.pdf' rel='noreferrer' target='_blank'>
        <img
          className='pf-cvAndEmail-icon'
          src={`./assets/icons/cv-icon.svg`}
          alt='cv'
        />
        <span className='pf-cvAndEmail-title'>CV</span>
      </a>
      <a href='mailto:phuclevinh2000@gmail.com'>
        <img
          className='pf-cvAndEmail-icon'
          src={`./assets/icons/email-icon.svg`}
          alt='cv'
        />
        <span className='pf-cvAndEmail-title'>Email</span>
      </a>
      <a
        href='https://github.com/phuclevinh2000'
        rel='noreferrer'
        target='_blank'
      >
        <img
          className='pf-cvAndEmail-icon'
          src={`./assets/icons/skills-github.svg`}
          alt='cv'
        />
        <span className='pf-cvAndEmail-title'>GitHub</span>
      </a>
    </div>
  );
};

export default CVAndEmail;
