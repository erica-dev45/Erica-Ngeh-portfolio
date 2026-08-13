export interface skillCategory{
    category: string;
    items: string[];

}

export const SKILL_CATEGORIES: skillCategory[]= [
      {
    category: 'Front-End',
    items: ['Angular', 'TypeScript', 'RxJS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Outils',
    items: ['Git', 'GitHub', 'Vercel', 'VS Code'],
  },
  {
    category: 'Autres',
    items: ['JavaScript (ES6+)', 'Responsive Design'],
  },
]