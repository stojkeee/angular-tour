import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Observable } from 'rxjs';
import { Product } from './product.interface';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, RouterModule],
  template: `
    <div
      class="flex justify-center bg-purple h-[calc(100vh-49px)] overflow-y-auto">
      <div class="container px-2 md:px-0">
        <div
          class="md:flex justify-between items-center overflow-auto rounded-md bg-white border mt-8 p-3">
          <div class="flex items-center overflow-x-scoll cursor-pointer">
            <div
              class="px-2 py-1 rounded font-medium capitalize whitespace-pre ml-2"
              [routerLink]="['']"
              [routerLinkActive]="'active'"
              [routerLinkActiveOptions]="{ exact: true }">
              All
            </div>
            <div
              *ngFor="let category of categories$ | async"
              class="px-2 py-1 rounded font-medium capitalize whitespace-pre ml-2"
              [routerLink]="['', category]"
              [routerLinkActive]="'active'"
              (click)="getData()">
              {{ category }}
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 py-8">
          <app-product-card
            *ngFor="let product of products$ | async"
            [data]="product">
          </app-product-card>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .active {
        @apply bg-green border-b-4 border-r-4 border-l-2 border-t-2;
      }
    `,
  ],
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Product[]>;
  categories$!: Observable<string[]>;
  productCategory!: string;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productCategory = this.route.snapshot.params['category'];

    this.categories$ = this.productsService.getAllCategories();

    this.getData();
  }

  getData() {
    if (this.productCategory) {
      this.products$ = this.productsService.getProductsByCategory(
        this.productCategory
      );
    } else {
      this.products$ = this.productsService.getAllProducts();
    }
  }
}
