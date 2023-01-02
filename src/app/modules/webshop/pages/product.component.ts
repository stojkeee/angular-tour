import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Product } from '../models/product.interface';
import { ProductsService } from '../services/products.service';
import { ProductCardComponent } from '../components/product-card.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <div class="bg-purple h-[calc(100vh-49px)] overflow-y-auto">
      <div class="container mx-auto px-2 md:px-0 py-8">
        <app-product-card
          *ngIf="product$ | async as product"
          [data]="product"
          [fullCard]="true">
        </app-product-card>
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
export class ProductComponent implements OnInit {
  product$!: Observable<Product>;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.product$ = this.productsService.getProductById(param['id']).pipe(
        tap(data => {
          if (data === null) {
            this.router.navigate(['/shop/all']);
          }
        })
      );
    });
  }
}
