import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartItem } from '../models/cart-item.interface';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div
      class="bg-green border p-4 md:flex justify-between rounded-md mb-4 items-center">
      <div class="flex">
        <img
          [src]="data.product.image"
          [alt]="data.product.image"
          class="image" />
        <div class="flex flex-col justify-center ml-4">
          <div
            class="font-bold text-xl my-1 cursor-pointer hover:underline"
            [routerLink]="['/product', data.product.id]">
            {{ data.product.title }}
          </div>
          <div class="font-bold text-blue my-1">
            {{ data.product.price | currency : 'USD' }}
          </div>
        </div>
      </div>
      <div>
        <div class="flex mt-4 md:mt-0">
          <button
            class="btn bg-yellow aspect-square ml-1"
            type="button"
            (click)="addToCart()">
            <span class="material-symbols-outlined"> add </span>
          </button>
          <div
            class="flex items-center justify-center aspect-square bg-white rounded w-12 border-2 ml-1">
            {{ data.quantity }}
          </div>
          <button
            class="btn bg-yellow aspect-square ml-1"
            type="button"
            (click)="removeFromCart()">
            <span class="material-symbols-outlined"> remove </span>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .image {
        @apply h-24 aspect-square object-contain bg-white p-5 border-b-4 border-r-4 border-l border-t border-black rounded-md;
      }
    `,
  ],
})
export class CartItemComponent {
  @Input() data!: CartItem;

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.data.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.data.product);
  }
}
