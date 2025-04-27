import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MenuComponent } from './pages/menupage/menupage.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';

export const routes: Routes = [
     { path: 'home', component: HomepageComponent},
     { path: 'menu', component: MenuComponent },
     { path: 'feedback', component: FeedbackComponent },
];
