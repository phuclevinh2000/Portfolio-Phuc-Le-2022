export type Skill = {
  name: string;
  label: string;
  url: string;
  color: string;
  category?: string;
  code: string;
};

export const categories = ['Front-end', 'Back-end', 'Languages', 'Tools'];

export const skills: Skill[] = [
  {
    code: 'html',
    name: 'html',
    label: 'HTML',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    color: 'rgba(227, 79, 38, 0.08)',
    category: 'Languages',
  },
  {
    code: 'css',
    name: 'css',
    label: 'CSS',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    color: 'rgba(1, 112, 186, 0.08)',
    category: 'Languages',
  },
  {
    code: 'js',
    name: 'js',
    label: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    color: 'rgba(255, 193, 7, 0.08)',
    category: 'Languages',
  },
  {
    code: 'ts',
    name: 'ts',
    label: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    color: 'rgba(49, 120, 198, 0.08)',
    category: 'Languages',
  },
  {
    code: 'reactjs',
    name: 'reactjs',
    label: 'ReactJS',
    url: 'https://reactjs.org/',
    color: 'rgba(0, 188, 212, 0.08)',
    category: 'Front-end',
  },
  {
    code: 'redux',
    name: 'redux',
    label: 'Redux',
    url: 'https://redux.js.org/',
    color: 'rgba(86, 61, 124, 0.08)',
    category: 'Front-end',
  },
  {
    code: 'nodejs',
    name: 'nodejs',
    label: 'NodeJS',
    url: 'https://nodejs.org/',
    color: 'rgba(140, 200, 75, 0.08)',
    category: 'Back-end',
  },
  {
    code: 'bootstrap',
    name: 'bootstrap',
    label: 'Bootstrap',
    url: 'https://getbootstrap.com/',
    color: 'rgba(86, 61, 124, 0.08)',
    category: 'Front-end',
  },
  {
    code: 'sass',
    name: 'sass',
    label: 'Sass',
    url: 'https://sass-lang.com/',
    color: 'rgba(205, 103, 153, 0.08)',
    category: 'Front-end',
  },

  {
    code: 'styledComponent',
    name: 'Styled Component',
    label: 'Styled Component',
    url: 'https://styled-components.com/',
    color: 'rgba(227, 79, 38, 0.08)',
    category: 'Front-end',
  },
  {
    code: 'mongodb',
    name: 'MongoDB',
    label: 'MongoDB',
    url: 'https://www.mongodb.com/',
    color: 'rgba(140, 200, 75, 0.08)',
    category: 'Back-end',
  },
  {
    code: 'vscode',
    name: 'vscode',
    label: 'Visual Studio Code',
    url: 'https://code.visualstudio.com/',
    color: 'rgba(0, 117, 183, 0.08)',
    category: 'Tools',
  },
  {
    code: 'vs',
    name: 'vs',
    label: 'MS Visual Studio',
    url: 'https://visualstudio.microsoft.com/',
    color: 'rgba(133, 85, 188, 0.08)',
    category: 'Tools',
  },
  {
    code: 'office',
    name: 'office',
    label: 'MS Office',
    url: 'https://www.office.com/',
    color: 'rgba(235, 60, 0, 0.08)',
    category: 'Tools',
  },
  {
    code: 'figma',
    name: 'figma',
    label: 'Figma',
    url: 'https://www.figma.com/',
    color: 'rgba(162, 89, 255, 0.08)',
    category: 'Tools',
  },
  {
    code: 'firebase',
    name: 'firebase',
    label: 'Firebase',
    url: 'https://firebase.google.com/',
    color: 'rgba(255, 167, 20, 0.08)',
    category: 'Back-end',
  },
  {
    code: 'git',
    name: 'git',
    label: 'Git',
    url: 'https://git-scm.com/',
    color: 'rgba(240, 81, 51, 0.08)',
    category: 'Tools',
  },
  {
    code: 'github',
    name: 'github',
    label: 'Github',
    url: 'http://github.com/',
    color: 'rgba(0, 0, 0, 0.08)',
    category: 'Tools',
  },
  {
    code: 'gitlab',
    name: 'gitlab',
    label: 'Gitlab',
    url: 'https://about.gitlab.com/',
    color: 'rgba(0, 0, 0, 0.08)',
    category: 'Tools',
  },
];

export default skills;
