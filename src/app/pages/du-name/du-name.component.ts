import { ApiService } from './../../api.service';
import { Component, Input } from '@angular/core';
import { BootstrapCard } from '../../interface/app.interface';
import { CardComponent } from "../../ui/card/card.component";
import { ProductcardComponent } from "../../ui/productcard/productcard.component";
import { SliderComponent } from "../../ui/slider/slider.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-du-name',
  standalone: true,
  imports: [CardComponent, ProductcardComponent, SliderComponent,CommonModule],
  templateUrl: './du-name.component.html',
  styleUrl: './du-name.component.scss'
})
export class DuNameComponent {
  categories: any;

  constructor(public api:ApiService){}
// data:any;
// filtered:any;
ngOnInit(){
  // this.data = this.api.getProducts().subscribe((res:any)=>{
  //   this.data = res;  })
    // console.log(this.data);
    this.categories = this.api.getCategories().subscribe((res:any)=>{
      this.categories = res;
    })






  }

}



