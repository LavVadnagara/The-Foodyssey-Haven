import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MenupageComponent } from './menupage/menupage.component';

export const routes: Routes = [
     {path: '/', component: HomepageComponent},
     {path: '/menu', component: MenupageComponent},
];
