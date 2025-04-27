import { Component } from '@angular/core';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { MenuComponent } from './pages/menupage/menupage.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  openLogin(): void {
    window.open("login1.html", "_blank");
  }
}
