import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tfh-foodcart',
  imports:[CommonModule],
  templateUrl: './foodcart.component.html',
  styleUrls: ['./foodcart.component.css']
})
export class FoodcartComponent {

  @ViewChild('dialogOne') dialogOne!: ElementRef<HTMLDialogElement>;
  @ViewChild('dialogTwo') dialogTwo!: ElementRef<HTMLDialogElement>;
  @ViewChild('dialogThree') dialogThree!: ElementRef<HTMLDialogElement>;
  @ViewChild('dialogFour') dialogFour!: ElementRef<HTMLDialogElement>;

  cartItems: { name: string, price: number }[] = [];
  cartTotal: number = 0;

  soups = [
    { name: 'Cream of Tomato', price: 90 },
    { name: 'Cheese corn Soup', price: 105 },
    { name: 'Almond Broccoli Soup', price: 105 },
    { name: 'Hot & Sour Soup', price: 105 },
    { name: 'Sweet Corn Soup', price: 110 }
  ];

  appetisers = [
    { name: 'Veg Manchurian', price: 150 },
    { name: 'Spring Roll', price: 130 },
    { name: 'Paneer chilly dry', price: 150 },
    { name: 'Harabhara Kebab', price: 120 },
    { name: 'Hakka Noodles', price: 150 }
  ];

  mainCourse = [
    { name: 'Paneer Butter Masala', price: 180 },
    { name: 'Mix Vegetable', price: 180 },
    { name: 'Cheese Butter Masala', price: 200 },
    { name: 'Veg Handi Masala', price: 180 },
    { name: 'Paneer Kadhai', price: 180 },
    { name: 'Veg Makhanwala', price: 190 },
    { name: 'Paneer Handi', price: 180 },
    { name: 'Khoya Kaju', price: 200 },
    { name: 'Paneer Tikka Masala', price: 200 },
    { name: 'Veg Kolhapuri', price: 180 },
    { name: 'Shahi Tikka Masala', price: 220 },
    { name: 'Malai Kofta', price: 200 },
    { name: 'Paneer Bhurji', price: 200 },
    { name: 'Dum Aloo', price: 180 }
  ];

  roti = [
    { name: 'Plain Roti', price: 20 },
    { name: 'Butter Roti', price: 30 },
    { name: 'Naan', price: 40 },
    { name: 'Cheese Naan', price: 65 },
    { name: 'Butter Paratha', price: 60 }
  ];

  rice = [
    { name: 'Plain Rice', price: 100 },
    { name: 'Jeera Rice', price: 130 },
    { name: 'Veg Pulao', price: 150 },
    { name: 'Veg Biryani', price: 200 },
    { name: 'Hyderabadi Biryani', price: 220 }
  ];

  desserts = [
    { name: 'Gulab Jamun', price: 85 },
    { name: 'Jalebi', price: 75 },
    { name: 'Rasgulla', price: 80 },
    { name: 'Vanilla Ice Cream', price: 50 },
    { name: 'Cookie Cream Ice Cream', price: 70 },
    { name: 'Choco Lava Cake', price: 100 }
  ];

  thali = [
    { name: 'Punjabi Thali', price: 250 },
    { name: 'Gujarati Thali', price: 200 },
    { name: 'Dal Bati', price: 180 },
    { name: 'Chole Puri/Kulcha', price: 180 }
  ];

  constructor(private router: Router) {}

  openDialog(dialogName: string) {
    (this as any)[`dialog${dialogName.charAt(0).toUpperCase() + dialogName.slice(1)}`].nativeElement.showModal();
  }

  closeDialog(dialogName: string) {
    (this as any)[`dialog${dialogName.charAt(0).toUpperCase() + dialogName.slice(1)}`].nativeElement.close();
  }

  addToCart(item: { name: string, price: number }) {
    this.cartItems.push(item);
    this.cartTotal += item.price;
  }

  proceedToPay() {
    alert(`Proceeding to payment. Total: ${this.cartTotal} Rs.`);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}

