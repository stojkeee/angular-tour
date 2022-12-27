import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { Observable, map } from 'rxjs';
import { CartItem } from '../models/cart-item.interface';
import { CartItemComponent } from '../components/cart-item.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  template: `
    <div
      class="flex justify-center bg-blue h-[calc(100vh-49px)] overflow-y-auto">
      <div class="container px-2 md:px-0">
        <div class="mt-8">
          <ng-container *ngIf="cartItems$ | async as items">
            <app-cart-item
              *ngFor="let item of items"
              [data]="item">
            </app-cart-item>
          </ng-container>
        </div>
      </div>
    </div>
  `,
  styles: [``],
  imports: [CommonModule, CartItemComponent],
})
export class CartComponent implements OnInit {
  cartItems$!: Observable<CartItem[]>;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems$ = this.cartService.cartItems$.pipe(
      map(items =>
        items.reduce((acc: CartItem[], curr) => {
          const objInAcc = acc.find(
            (o: CartItem) => o.product === curr.product
          );
          if (objInAcc) objInAcc.quantity += curr.quantity;
          else acc.push(curr);
          return acc;
        }, [])
      )
    );
  }
}
