import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
project = [
  {
    image : 'images/1.png'
  },
  {
    image : 'images/2.png'
  },
  {
    image : 'images/3.png'
  },
  {
    image : 'images/4.png'
  },
  {
    image : 'images/5.png'
  },
  {
    image : 'images/6.png'
  },
  {
    image : 'images/7.png'
  },
  {
    image : 'images/8.png'
  }
]
}
