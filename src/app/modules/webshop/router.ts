import { Route } from '@angular/router';
import { ChartComponent } from './pages/chart/chart.component';
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
        path: 'chart',
        component: ChartComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];
