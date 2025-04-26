import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'tfh-homepage',
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  image5url = 'tfh-front/src/assets/5.jpg'
  slides = [
    { img: 'assets/7.jpg' },
    { img: 'assets/6.jpg' },
    { img: 'assets/7.jpg' }
  ];
  onlineOfferDate = '3rd July, 2024';
  dineInOfferDate = '30th June, 2024';
}