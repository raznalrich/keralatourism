import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactDetails = {
    phone: '+91 974646 6925',
    email: 'raznalrich@gmail.com',
    address: `kochamparambil house
              p.o.mathilakam, punnakkabazar
              thrissur, 680685`,
  };

}
