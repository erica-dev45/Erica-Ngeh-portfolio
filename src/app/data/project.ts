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
    title: 'Gestion de tâches', 
    description: 'Application Angular consommant une API REST.', 
    techs: ['Angular', 'TypeScript', 'REST'], 
    demoUrl: 'https://...', 
    githubUrl: 'https://github.com/...', 
    image: 'assets/projets/taches.png', 
  }, 
  // ... vos autres projets 
];