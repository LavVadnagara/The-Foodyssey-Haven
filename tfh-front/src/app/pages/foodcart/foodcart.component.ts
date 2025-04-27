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
  openDialogOne(dialogId: string) {
    this.showDialogOne = !this.showDialogOne;
    const dialog = document.getElementById(dialogId) as HTMLDialogElement;
    if (dialog) {
      dialog.showModal();
    }
  }
  openDialogTwo(dialogId: string) {
    this.showDialogTwo = !this.showDialogTwo;
    const dialog = document.getElementById(dialogId) as HTMLDialogElement;
    if (dialog) {
      dialog.showModal();
    }
  }
  openDialogThree(dialogId: string) {
    this.showDialogThree = !this.showDialogThree;
    const dialog = document.getElementById(dialogId) as HTMLDialogElement;
    if (dialog) {
      dialog.showModal();
    }
  }
  openDialogFour(dialogId: string) {
    this.showDialogFour = !this.showDialogFour;
    const dialog = document.getElementById(dialogId) as HTMLDialogElement;
    if (dialog) {
      dialog.showModal();
    }
  }
  
  closeDialog(dialogId: string) {
    this.showDialogOne = false;
    this.showDialogTwo = false;
    this.showDialogThree = false;
    this.showDialogFour = false;

    const dialog = document.getElementById(dialogId) as HTMLDialogElement;
    if (dialog) {
      dialog.close();
    }
  }

}
