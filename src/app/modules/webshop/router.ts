import { Route } from '@angular/router';
import { CartComponent } from './pages/cart.component';
import { LoginComponent } from './pages/login.component';
import { ProductsComponent } from './pages/products.component';

import { WebshopComponent } from './webshop.component';

export const WEBSHOP_ROUTES: Route[] = [
  {
    path: '',
    component: WebshopComponent,
    children: [
      { path: '', redirectTo: 'shop/all', pathMatch: 'full' },
      {
        path: 'shop/:category',
        component: ProductsComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];
