import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tfh-foodcart',
  imports: [CommonModule],
  templateUrl: './foodcart.component.html',
  styleUrls: ['./foodcart.component.css']
})

export class FoodcartComponent {
  showDialogOne = false
  showDialogTwo = false
  showDialogThree = false
  showDialogFour = false

  cartItems: { name: string; price: number }[] = [];

  // Add item to cart
  addToCart(name: string, price: number) {
    this.cartItems.push({ name, price });
    // alert(`${name} added to cart!`);
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  // Dialog control
  openDialog(dialogId: string) {
    this.showDialogOne = !this.showDialogOne;
    this.showDialogTwo = !this.showDialogTwo;
    this.showDialogThree = !this.showDialogThree;
    this.showDialogFour = !this.showDialogFour;
    const dialog = document.getElementById(dialogId) as HTMLDialogElement;
    if (dialog) {
      dialog.showModal();
    }
  }
  
  closeDialog(dialogId: string) {
    const dialog = document.getElementById(dialogId) as HTMLDialogElement;
    if (dialog) {
      dialog.close();
    }
  }

}
