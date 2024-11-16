import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {
program = [
  {
    language : 'Wordpress',
    progress : '90%'
  },
  {
    language : 'Graphic design',
    progress : '80%'
  },
  {
    language : 'Web Design',
    progress : '85%'
  },
  {
    language : 'App Design',
    progress : '60%'
  },
]
}
