import { SKILL_CATEGORIES, skillCategory } from './../../data/skills';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skillCategories =SKILL_CATEGORIES
}
