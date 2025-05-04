import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'tfh-dinein',
  imports: [CommonModule , FormsModule, FooterComponent],
  templateUrl:'./dinein.component.html',
  styleUrls: ['./dinein.component.css']
})
export class DineInComponent {

  bookingData = {
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: ''
  };

  guests: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private router: Router) {}

  // navigateToLogin(): void {
  //   this.router.navigate(['/login']);
  // }

  bookNow(): void {
    console.log('Booking Details:', this.bookingData);
    // Here you would usually send the bookingData to your backend API.
    alert('Your table has been reserved successfully!');
  }
}

