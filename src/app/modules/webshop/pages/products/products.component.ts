import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <div class="flex justify-center bg-purple h-[calc(100vh-48px)]">
      <div class="container px-2 py-8">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <app-product-card></app-product-card>
        </div>
      </div>
    </div>
  `,
  styles: [``],
})
export class ProductsComponent {}
