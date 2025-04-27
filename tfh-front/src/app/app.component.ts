import { Component } from '@angular/core';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { MenuComponent } from './pages/menupage/menupage.component';
import { RouterOutlet } from '@angular/router';
// import { MenuComponent } from './pages/menupage/menupage.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
}
