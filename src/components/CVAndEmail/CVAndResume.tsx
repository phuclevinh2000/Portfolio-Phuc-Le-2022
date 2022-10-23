import './CVAndEmail.scss';

const CVAndEmail = () => {
  return (
    <div className='pf-cvAndEmail'>
      <a
        href='./assets/Phuc Le - CV - 23.10.2022.pdf'
        rel='noreferrer'
        target='_blank'
      >
        <img
          className='pf-cvAndEmail-icon'
          src={`./assets/icons/cv-icon.svg`}
          alt='cv'
        />
        <span className='pf-cvAndEmail-title'>Resume</span>
      </a>
      <a href='mailto:phuclevinh2000@gmail.com'>
        <img
          className='pf-cvAndEmail-icon'
          src={`./assets/icons/email-icon.svg`}
          alt='cv'
        />
        <span className='pf-cvAndEmail-title'>Email</span>
      </a>
    </div>
  );
};

export default CVAndEmail;
