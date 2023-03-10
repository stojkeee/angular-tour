import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../components/product-card.component';
import { Observable } from 'rxjs';
import { Product } from '../models/product.interface';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LoaderService } from 'src/app/core/loader.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    RouterModule,
    MatProgressSpinnerModule,
  ],
  template: `
    <div class="bg-purple h-[calc(100vh-49px)] overflow-y-auto">
      <div class="container mx-auto px-2 md:px-0">
        <div
          class="md:flex justify-between items-center overflow-auto rounded-md bg-white border mt-8 p-3">
          <div class="flex items-center overflow-x-scoll cursor-pointer">
            <div
              *ngIf="loaderService.isLoading$ | async; else allCategories"
              class="flex items-center h-10">
              <div
                *ngFor="let item of [0, 1, 2, 3, 4, 5]"
                class="h-4 w-16 bg-black/10 rounded ml-6 animate-pulse"></div>
            </div>
            <ng-template #allCategories>
              <div
                class="px-2 py-1 rounded font-medium capitalize whitespace-pre ml-2"
                [routerLink]="['/shop/all']"
                [routerLinkActive]="'active'">
                All
              </div>
            </ng-template>
            <div
              *ngFor="let category of categories$ | async"
              class="px-2 py-1 rounded font-medium capitalize whitespace-pre ml-2"
              [routerLink]="['/shop', category]"
              [routerLinkActive]="'active'">
              {{ category }}
            </div>
          </div>
        </div>
        <div
          *ngIf="loaderService.isLoading$ | async"
          class="flex items-center justify-center h-screen">
          <mat-spinner color="primary"></mat-spinner>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 py-8">
          <app-product-card
            *ngFor="let product of products$ | async; else: loading"
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
    private route: ActivatedRoute,
    public loaderService: LoaderService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.productCategory = param['category'];
      this.getData();
    });

    this.categories$ = this.productsService.getAllCategories();
  }

  getData() {
    if (this.productCategory !== 'all') {
      this.products$ = this.productsService.getProductsByCategory(
        this.productCategory
      );
    } else {
      this.products$ = this.productsService.getAllProducts();
    }
  }
}
