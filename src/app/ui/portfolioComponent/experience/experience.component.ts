import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
experience =[
  {
    date:'Aug 2024 - Present',
    position:'Trainee',
    company:'Experion Technologies'
  },
  {
    date:'Oct 2023 - July 2024',
    position:'Website Developer Intern',
    company:'Primeradental Hub'
  }
]
}
