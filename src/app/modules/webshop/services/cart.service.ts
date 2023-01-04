import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../models/cart-item.interface';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly _cartItems = new BehaviorSubject<CartItem[]>([]);

  readonly cartItems$: Observable<CartItem[]> = this._cartItems.asObservable();

  get cartItems(): CartItem[] {
    return this._cartItems.getValue();
  }

  private set cartItems(item: CartItem[]) {
    this._cartItems.next(item);
  }

  addToCart(product: Product) {
    const index = this.cartItems.findIndex(
      item => item.product.id === product.id
    );
    if (index < 0) {
      this.cartItems = [...this.cartItems, { product, quantity: 1 }];
    } else {
      this.cartItems[index].quantity += 1;
      this.cartItems = [...this.cartItems];
    }
  }

  removeFromCart(product: Product) {
    const index = this.cartItems.findIndex(
      item => item.product.id === product.id
    );
    if (this.cartItems[index].quantity <= 1) {
      this.cartItems.splice(index, 1);
      this.cartItems = [...this.cartItems];
    } else {
      this.cartItems[index].quantity -= 1;
      this.cartItems = [...this.cartItems];
    }
  }
}
