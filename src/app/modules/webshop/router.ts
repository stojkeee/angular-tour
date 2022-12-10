import { Route } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';

import { WebshopComponent } from './webshop.component';

export const WEBSHOP_ROUTES: Route[] = [
  {
    path: '',
    component: WebshopComponent,
    children: [
      {
        path: '',
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
