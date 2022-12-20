import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../models/cart-item.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly _cartItems = new BehaviorSubject<CartItem[]>([]);

  cartItems$: Observable<CartItem[]> = this._cartItems.asObservable();

  get cartItems(): CartItem[] {
    return this._cartItems.getValue();
  }

  private set cartItems(item: CartItem[]) {
    this._cartItems.next(item);
  }

  addToCart(item: CartItem) {
    this.cartItems = [...this.cartItems, item];
  }
}
