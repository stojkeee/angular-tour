import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="w-full flex justify-center bg-white border-b border-black-2">
      <div class="flex items-center justify-between container h-12 px-2">
        <div
          class="flex font-bold cursor-pointer"
          [routerLink]="''">
          <span class="material-symbols-outlined mr-2"> shopping_bag </span>
          Webshop
        </div>
        <nav class="flex items-center">
          <button
            class="btn ml-2"
            type="button"
            [routerLink]="'cart'">
            Cart
            <span *ngIf="cartItems$ | async as cartItems">
              ({{ cartItems }})
            </span>
          </button>
          <button
            class="btn bg-yellow ml-2"
            type="button"
            [routerLink]="'login'">
            Login
          </button>
        </nav>
      </div>
    </header>
  `,
  styles: [``],
})
export class HeaderComponent {
  cartItems$: Observable<number> = this.cartService.cartItems$.pipe(
    map(items => items.reduce((acc, item) => acc + item.quantity, 0))
  );

  constructor(private cartService: CartService) {}
}
