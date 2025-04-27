import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MenuComponent } from './pages/menupage/menupage.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { AboutUsComponent } from './pages/aboutus/aboutus.component';
import { DineInComponent } from './pages/dinein/dinein.component';
import { FoodcartComponent } from './pages/foodcart/foodcart.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
     { path: '', component: HomepageComponent},
     { path: 'menu', component: MenuComponent },
     { path: 'feedback', component: FeedbackComponent },
     { path: 'aboutus', component: AboutUsComponent},
     { path: 'dinein', component: DineInComponent},
     { path: 'foodcart', component: FoodcartComponent},
     { path: 'login', component: LoginComponent}
];
