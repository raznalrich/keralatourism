import { Component } from '@angular/core';
import { CarouselComponent } from "../../ui/carousel/carousel.component";
import { BodycontentComponent } from "../../ui/bodycontent/bodycontent.component";
import { CardcollectionComponent } from "../../ui/cardcollection/cardcollection.component";

@Component({
  selector: 'app-kerala-page',
  standalone: true,
  imports: [CarouselComponent, BodycontentComponent, CardcollectionComponent],
  templateUrl: './kerala-page.component.html',
  styleUrl: './kerala-page.component.scss'
})
export class KeralaPageComponent {

}
