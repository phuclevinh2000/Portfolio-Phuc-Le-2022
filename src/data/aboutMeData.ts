type incomingAboutMeData = {
  title: string;
  role: string;
  facts: string[];
  description: string;
  trivias: string[];
};

export const aboutMeData: incomingAboutMeData = {
  title: "Hello, I'm Phuc.",
  role: 'A junior software developer.',
  description:
    'I am a full time web developer from Finland. I am open to suggestions, improvements, and opportunities I take great care in the experience, architecture, and code quality of the projects I build, as well as the meaning of those projects.',
  facts: [
    'My full name is Le Vinh Phuc.',
    'I was born on 16/04/2000.',
    'I am a Vietnamese and living in Tampere, Finland.',
    'Personality: 70% extrovert 30% introvert.',
    'Capability: Good.',
    'My living happiness: Family, friends, technologies, badminton.',
  ],
  trivias: [
    'I am a competitive badminton player.',
    'I can play several music instruments.',
    'I am rasing two cats and one dog.',
    'I am trying to perfect what I know instead of finding a new one.',
  ],
};
