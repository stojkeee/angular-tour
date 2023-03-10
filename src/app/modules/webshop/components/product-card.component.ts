import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../models/product.interface';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="bg-green border rounded-md lg:flex p-4">
      <img
        [src]="data.image"
        [alt]="data.image"
        class="image"
        [ngClass]="fullCard ? 'w-2/6' : 'h-48'" />
      <div
        class="flex flex-col w-full justify-between mt-6 lg:mt-0 ml-0 lg:ml-6"
        [ngClass]="{ 'min-h-full': !fullCard }">
        <div>
          <div class="flex justify-between">
            <div
              class="text-black/50 cursor-pointer hover:underline"
              [routerLink]="['../' + data.category]">
              {{ data.category }}
            </div>
            <div class="flex items-center text-sm">
              <span
                class="material-symbols-outlined mr-2 text-black/30 text-base">
                star
              </span>
              {{ data.rating.rate }}
            </div>
          </div>
          <div
            class="font-bold text-xl my-1 cursor-pointer hover:underline"
            [routerLink]="['/product', data.id]">
            {{ data.title }}
          </div>
          <div class="font-bold text-blue my-1">
            {{ data.price | currency : 'USD' }}
          </div>
          <div
            *ngIf="fullCard"
            class="my-4">
            <div class="my-1 text-sm font-bold">Description</div>
            <div>{{ data.description }}</div>
          </div>
        </div>
        <div class="flex">
          <button
            class="btn bg-yellow mr-1"
            [ngClass]="{ 'w-full': !fullCard }"
            type="button"
            (click)="addToCart()">
            Add to cart
          </button>
          <button
            class="btn bg-white aspect-square ml-1"
            type="button">
            <span class="material-symbols-outlined"> favorite </span>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .image {
        @apply aspect-square object-contain bg-white p-5 border-b-8 border-r-8 border-l-2 border-t-2 border-black rounded-md;
      }
    `,
  ],
})
export class ProductCardComponent {
  @Input() data!: Product;
  @Input() fullCard = false;

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.data);
  }
}
