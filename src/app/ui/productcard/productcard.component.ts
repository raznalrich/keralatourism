import { Component, Input } from '@angular/core';
import { BootstrapCard, BootstrapProductCard } from '../../interface/app.interface';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-productcard',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.scss'
})
export class ProductcardComponent {
  @Input() cards:BootstrapProductCard={
    id:0,
    title:'',
  image:'',
  description:'',
  price:0,
  }
}
