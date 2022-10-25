export type careerType = {
  id: number;
  name: string;
  duration: string;
  description: string;
  aboutMe: string;
  mainTask: string[];
  techUsed: string[];
};

export type sideProject = {
  id: number;
  name: string;
  techUsed: string[];
  description: string;
  duration: string;
  mainTask: string[];
  demo: string;
  github: string;
};

type workAndProjectType = {
  careers: careerType[];
  sideProject: sideProject[];
};

export const workAndProject: workAndProjectType = {
  careers: [
    {
      id: 1,
      name: 'M-Files Oy',
      duration: 'Feb 2022 - current',
      description:
        'M-Files offers an innovative metadata-driven document management platform.',
      aboutMe:
        'M-Files is a fresh start for me after graduating from university. I was able to learn a lot about the processes, new technologies and best practices and apply to my daily work. I am also improving my communication and cooperation.',
      mainTask: [
        'Meeting with UX team to develope new features',
        'Fixing bugs from customer and automation team for old features to make sure the application run smoothly',
        'Developing new features for M-Files web application',
        "Review other developer's code to improve the quality of code base.",
      ],
      techUsed: [
        'HTML',
        'CSS module',
        'SASS',
        'React',
        'Redux',
        'Node.JS',
        'Gulp',
        'M-Files',
        'jQuery',
        'TypeScript',
        'JavaScript',
        'Azure',
        'GitLab',
        'Scrum',
      ],
    },
    {
      id: 2,
      name: 'Integrify Oy',
      duration: 'June 2021 - current',
      description:
        'Integrify is a software development company. Integrify offer recruitment, staffing, and IT - consulting services.',
      aboutMe:
        'Integrify is the company that I internship for. During the time here, I learnt a lot of new knowledge as well as connections and tips which is useful in working life.',
      mainTask: [
        'Meeting with instructors.',
        'Fixing bugs from old assignment and develope new things',
        'Mock interview.',
        "Review other developer's code to improve the quality of code base.",
      ],
      techUsed: [
        'MERN',
        'CSS module',
        'SASS',
        'Redux',
        'TypeScript',
        'JavaScript',
        'Azure',
        'GitHub',
      ],
    },
  ],
  sideProject: [
    {
      id: 3,
      name: 'Lofi Generator Website',
      duration: '2022',
      techUsed: [
        'React.JS',
        'TypeScript',
        'MongoDB',
        'Node.JS',
        'Express.JS',
        'Postman',
        'Jwt-token',
      ],
      mainTask: [
        'Generate lofi music from Youtube and embbeded to the app',
        'Making animation background',
        'Log in/Log out',
        'Generate backgroun noise and allow user to mix it',
      ],
      demo: 'https://lofiphucle.netlify.app/',
      github: 'https://github.com/phuclevinh2000/Lofi-website',
      description:
        'A web application that can generate lofi music and background noise to help user focus more on what they are doing.',
    },
    {
      id: 4,
      demo: '',
      github:
        'https://github.com/phuclevinh2000/STHEC2021-Hitachi-solution-protocol-web-version',
      name: 'STHEC2021 Solution Protocol',
      duration: '2021',
      techUsed: [
        'React.JS',
        'TypeScript',
        'MongoDB',
        'Node.JS',
        'Express.JS',
        'Postman',
        'Jwt-token',
      ],
      mainTask: [
        'Show all the items',
        'Log in/ Log out',
        'Search function',
        'Categories',
        "Display data that is shown from Hitachi's application to end user",
      ],
      description:
        'A full-stack eCommerce website that won the solution to the challenges at the STHEC2021 hackathon hosted by Wärtsilä.',
    },
    {
      id: 5,
      demo: 'https://job-seeker-phucle.herokuapp.com/',
      github: 'https://github.com/phuclevinh2000/Job-Tracking-MERN',
      name: 'Job Tracker Application',
      duration: '2022',
      techUsed: [
        'React.JS',
        'SCSS',
        'MongoDB',
        'Node.JS',
        'Express.JS',
        'Postman',
        'Jwt-token',
        'JavaScript',
      ],
      mainTask: [
        'Show all the job interview and their state',
        'Log in/ Log out',
        'Search function',
        'Categories',
        'Graph the data and draw a map of the job you applied',
      ],
      description:
        'A full-stack application that keeps track of your job interview.',
    },
    {
      id: 6,
      demo: 'https://ngocmaxinutri.herokuapp.com/',
      github: 'https://github.com/phuclevinh2000/Ngoc-Maxinutri',
      name: 'Ngoc Maxinutri Web Application',
      duration: '2022',
      techUsed: [
        'React.JS',
        'SCSS',
        'MongoDB',
        'Node.JS',
        'Express.JS',
        'Postman',
        'Jwt-token',
        'JavaScript',
      ],
      mainTask: [
        'Discussion with the owner of the company and design the',
        'Documenting the project and send report to company owner and teacher',
        'Search function',
        'Categories',
        'Basic feature of an eCommerce application',
      ],
      description:
        'A project with the most essential features for modern e-commerce. This is also a web application for my family and this is also my thesis.',
    },
    {
      id: 8,
      demo: 'https://todolistwithreduxphucle.netlify.app/',
      github: 'https://github.com/phuclevinh2000/To-do-list-with-Redux',
      duration: '2021',
      name: 'To Do List Redux',
      techUsed: ['React', 'BootStrap', 'JavaScript', 'Redux'],
      mainTask: [
        'Desgin the application',
        'Make the prototype',
        'Record the video and pulish to Youtube',
      ],
      description:
        'A simple todolist using Redux, React, which I recorded the tutorial on Youtube',
    },
    {
      id: 9,
      demo: 'https://tesla-clone-phucle.netlify.app/',
      github: 'https://github.com/phuclevinh2000/tesla-clone',
      duration: '2021',
      name: 'Tesla Clone',
      techUsed: [
        'React.JS',
        'Redux Tool kit',
        'JavaScript',
        'Styled Component',
      ],
      mainTask: [
        'Learn the concept of Redux Tool Kit and Styled Component',
        'Make the prototype',
      ],
      description:
        'Cloning the testla page. The main pupose of this project is to improve the way I am styling web App.',
    },
  ],
};
