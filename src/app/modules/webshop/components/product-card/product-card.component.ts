import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-green border rounded-md lg:flex p-4">
      <div class="image-decoration">
        <img
          [src]="item.image"
          alt=""
          class="absolute z-10 inset-0 w-full h-full object-fit border border-black/10"
          loading="lazy" />
      </div>
      <div
        class="flex flex-col w-full min-h-full justify-between mt-6 lg:mt-0 ml-0 lg:ml-6">
        <div>
          <div class="flex justify-between">
            <div class="text-black/50 cursor-pointer hover:underline">
              {{ item.category }}
            </div>
            <div class="flex items-center text-sm">
              <span
                class="material-symbols-outlined mr-2 text-black/30 text-base">
                star
              </span>
              {{ item.rating.rate }}
            </div>
          </div>
          <div class="font-bold text-xl my-1 cursor-pointer hover:underline">
            {{ item.title }}
          </div>
          <div class="font-bold text-blue my-1">
            {{ item.price | currency : 'USD' }}
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
  styles: [
    `
      .image-decoration {
        @apply flex-none w-48 h-48 relative z-10 before:absolute before:top-2 before:left-2 before:w-full before:h-full before:bg-black/10;
      }
    `,
  ],
})
export class ProductCardComponent {
  item: any = {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description:
      '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
    rating: {
      rate: 4.7,
      count: 130,
    },
  };
}
