import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'tfh-homepage',
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
 openLogin(): void {
window.open("login1.html", "_blank");}
}
