// about-us.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'tfh-about-us',
  imports: [FooterComponent],
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'] 
})
export class AboutUsComponent {
  
  constructor(private router: Router) {}

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}

