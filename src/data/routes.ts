export type Route = {
  path: string;
  title: string;
  icon: any;
  code: string;
};

const routes: Route[] = [
  { path: '/about', title: 'About Me', icon: 'home-about', code: 'about' },
  { path: '/work', title: 'My Work', icon: 'home-edu', code: 'work' },
  { path: '/skills', title: 'Skills', icon: 'home-skills', code: 'skills' },
  { path: '/hobby', title: 'Hobby', icon: 'home-work', code: 'hobby' },
];

export default routes;
