import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  showComponent = true;

  constructor(private router: Router) {}

  openLogin(): void {
    this.showComponent = !this.showComponent;
    this.router.navigate(['login']);
  }
}
