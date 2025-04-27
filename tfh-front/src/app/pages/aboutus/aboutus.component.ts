// about-us.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tfh-about-us',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'] // Assuming you copy your Aboutus.css here
})
export class AboutUsComponent {
  
  constructor(private router: Router) {}

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}

