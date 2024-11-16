import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapCard } from '../../interface/app.interface';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
// [x: string]: any;
  // @Input() title:string='Keralam';
  // @Input() image:string='';
  // @Input() desc:string='';
  @Input() cards:BootstrapCard={
    title:'',
  image:'',
  desc:'',
  }
}
