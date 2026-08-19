export interface Project { 
  title: string; 
  description: string; 
  techs: string[]; 
  demoUrl: string; 
  githubUrl: string; 
  image: string; 
} 
  
export const PROJECTS: Project[] = [
  {
    title: 'Calao Dore',
    description:
      'Angular restaurant site with routing, deployed on Vercel as an academic assignment.',
    techs: ['Angular', 'TypeScript', 'CSS'],
    demoUrl: 'https://le-calao-dore-delta.vercel.app',
    githubUrl: 'https://github.com/erica-dev45/le-calao-dore',
    image: 'calao-dore.png'
  },
  {
    title: 'Shop App',
    description:
      'Front-end e-commerce shop that shows a popup during a click and displays the images-built with Angular signals and mock data.',
    techs: ['Angular', 'TypeScript', 'CSS'],
    demoUrl: 'https://shop-app-one-steel.vercel.app',
    githubUrl: 'https://github.com/erica-dev45/shop-app',
    image: 'shop-app.png'
  },

  {
   title: 'FreeBosh',
    description:
      'Front-end Web-App for universities. Universities use it to manage announcements , and notes published for students to use without needing internet connection.',
    techs: ['Angular', 'TypeScript', 'CSS', 'Angular Service Worker'],
    demoUrl: 'https://free-bosh.vercel.app',
    githubUrl: 'https://github.com/MrAbkr19/freeBosh',
    image: 'freeBosh.png'},
];