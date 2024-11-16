import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  ingredientList = [
    {image: 'images/1.jpg'},
    {image: 'images/2.jpg'},
    {image: 'images/3.jpg'},
  ];
}
