import { Component , Input } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductcardComponent } from "../productcard/productcard.component";
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CarouselModule, ProductcardComponent,CommonModule],

  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})

export class SliderComponent {
  constructor(public api:ApiService){}
  data:any;

  @Input() cat = '';



  ngOnInit(){
    // this.data = this.api.getProducts().subscribe((res:any)=>{
    //   this.data = res;  })
    this.data = this.api.getProducts().subscribe((res:any)=>{
      this.data = res;
    })
      console.log(this.data);
// console.log('category'+this.cat);

      }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
