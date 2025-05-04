import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule for template-driven forms
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'tfh-feedback',
  imports: [FormsModule, FooterComponent],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  constructor(private router: Router) {}

  // Navigate to login page
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  // Handle form submission
  onSubmit(formData: any) {
    console.log(formData);
    // You can add your form submission logic here
  }

}
