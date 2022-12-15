import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../pages/products/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="bg-green border rounded-md lg:flex p-4">
      <img
        [src]="data.image"
        [alt]="data.image"
        class="h-48 aspect-square object-fit image" />
      <div
        class="flex flex-col w-full min-h-full justify-between mt-6 lg:mt-0 ml-0 lg:ml-6">
        <div>
          <div class="flex justify-between">
            <div
              class="text-black/50 cursor-pointer hover:underline"
              [routerLink]="['./' + data.category]">
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
          <div class="font-bold text-xl my-1 cursor-pointer hover:underline">
            {{ data.title }}
          </div>
          <div class="font-bold text-blue my-1">
            {{ data.price | currency : 'USD' }}
          </div>
        </div>
        <div class="flex">
          <button
            class="btn bg-yellow w-full mr-1"
            type="button">
            Buy now
          </button>
          <button
            class="btn bg-white w-full ml-1"
            type="button">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [``],
})
export class ProductCardComponent {
  @Input() data!: Product;
}
