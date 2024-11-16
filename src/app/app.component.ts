import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CarouselComponent } from "./ui/carousel/carousel.component";
import { BodycontentComponent } from "./ui/bodycontent/bodycontent.component";
// import { CollectioncardComponent } from "./component/collectioncard/collectioncard.component";
import { CardcollectionComponent } from "./ui/cardcollection/cardcollection.component";
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CarouselComponent, BodycontentComponent,  CardcollectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'keralatourism';
}
