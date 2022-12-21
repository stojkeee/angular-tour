import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { Observable, map, tap } from 'rxjs';
import { CartItem } from '../models/cart-item.interface';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="cartItems$ | async as items">
      {{ items | json }}
    </ng-container>
  `,
  styles: [``],
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
