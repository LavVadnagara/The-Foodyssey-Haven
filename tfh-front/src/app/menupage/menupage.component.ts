import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-menupage',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './menupage.component.html',
  styleUrl: './menupage.component.css'
})
export class MenupageComponent {

}
