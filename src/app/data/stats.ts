// src/app/data/stats.ts
export interface Stat {
  label: string;
  target: number;
  suffix: string; // '+', '%', or '' — appended after the animated number
}

export const STATS: Stat[] = [
  { label: 'Years Exp', target: 2, suffix: '' },
  { label: 'Projects', target: 20, suffix: '+' },
  { label: 'Tech Stack', target: 15, suffix: '+' },
  { label: 'Commits', target: 1000, suffix: '+' },
  { label: 'Delivery', target: 100, suffix: '%' },
];