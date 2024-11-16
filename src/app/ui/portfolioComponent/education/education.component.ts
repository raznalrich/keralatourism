import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
education = [{
  date : '2019 - 2023',
  school:'Kerala Technical University',
},
{
  date : '2016 - 2018',
  school:'Kerala state board of higher secondary education',
},
{
  date : '    - 2016',
  school:'Technical High School',
},
]
}
