import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { Observable, map } from 'rxjs';
import { CartItem } from '../models/cart-item.interface';
import { CartItemComponent } from '../components/cart-item.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  template: `
    <div class="bg-blue h-[calc(100vh-49px)] overflow-y-auto">
      <div class="container mx-auto px-2 md:px-0">
        <div class="mt-8">
          <ng-container *ngIf="cartItems$ | async as items">
            <ng-container *ngIf="items.length; else emptyData">
              <app-cart-item
                *ngFor="let item of items"
                [data]="item">
              </app-cart-item>
              <div
                class="bg-green border p-4 flex justify-between rounded-md items-center">
                <div>
                  <div class="text-black/50">Total price:</div>
                  <div class="font-bold text-blue">
                    {{ price$ | async | currency : 'USD' }}
                  </div>
                </div>
                <button
                  class="btn bg-yellow"
                  type="button">
                  Go to checkout
                </button>
              </div>
            </ng-container>
            <ng-template #emptyData>
              <div
                class="bg-green border p-4 flex justify-center rounded-md items-center">
                Cart is empty!
              </div>
            </ng-template>
          </ng-container>
        </div>
      </div>
    </div>
  `,
  styles: [``],
  imports: [CommonModule, CartItemComponent],
})
export class CartComponent {
  cartItems$: Observable<CartItem[]> = this.cartService.cartItems$;
  price$: Observable<number> = this.cartService.cartItems$.pipe(
    map(items =>
      items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    )
  );

  constructor(private cartService: CartService) {}
}
