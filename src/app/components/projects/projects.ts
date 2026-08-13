import { Component } from '@angular/core';
import { PROJECTS } from '../../data/project';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = PROJECTS;
}
