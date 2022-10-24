type careerType = {
  id: number;
  name: string;
  duration: string;
  aboutCompany: string;
  aboutMe: string;
  mainTask: string[];
  techUsed: string[];
};

type sideProject = {
  id: number;
  name: string;
  techUsed: string[];
  description: string;
};

type workAndProjectType = {
  careers: careerType[];
  sideProject: sideProject[];
};

export const workAndProject: workAndProjectType = {
  careers: [
    {
      id: 1,
      name: 'M-Files',
      duration: 'Feb 2022 - current',
      aboutCompany:
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
        'NodeJS',
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
      name: 'Integrify',
      duration: 'June 2021 - current',
      aboutCompany:
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
      techUsed: [
        'ReactJS',
        'TypeScript',
        'MongoDB',
        'NodeJS',
        'ExpressJS',
        'Postman',
        'Jwt-token',
      ],
      description:
        'A web application that can generate lofi music and background noise to help user focus more on what they are doing.',
    },
    {
      id: 4,
      name: 'STHEC2021 Solution Protocol',
      techUsed: [
        'ReactJS',
        'TypeScript',
        'MongoDB',
        'NodeJS',
        'ExpressJS',
        'Postman',
        'Jwt-token',
      ],
      description:
        'A full-stack eCommerce website that won the solution to the challenges at the STHEC2021 hackathon hosted by Wärtsilä.',
    },
    {
      id: 5,
      name: 'Job Tracker Application',
      techUsed: [
        'ReactJS',
        'SCSS',
        'MongoDB',
        'NodeJS',
        'ExpressJS',
        'Postman',
        'Jwt-token',
        'JavaScript',
      ],
      description:
        'A full-stack application that keeps track of your job interview.',
    },
    {
      id: 6,
      name: 'Ngoc Maxinutri Web Application',
      techUsed: [
        'ReactJS',
        'SCSS',
        'MongoDB',
        'NodeJS',
        'ExpressJS',
        'Postman',
        'Jwt-token',
        'JavaScript',
      ],
      description:
        'A project with the most essential features for modern e-commerce. This is also a web application for my family and this is also my thesis.',
    },
    {
      id: 7,
      name: 'Do not bite my hand',
      techUsed: ['ReactJS', 'CSS', 'TensoreflowJS', 'JavaScript'],
      description:
        'An application that vies warning wherever you bite your nails when working on the computer.',
    },
  ],
};
