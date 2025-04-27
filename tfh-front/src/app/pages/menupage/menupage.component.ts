import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tfh-menu',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenuComponent {
  // Inject the Router service in the constructor
  constructor(private router: Router) {}

  // Define the navigateToLogin function
  navigateToLogin() {
    // Use the router to navigate to the login page
    this.router.navigate(['/login']);
  }

  // Other properties and methods for the MenuComponent
}

