import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/webshop/router').then(mod => mod.WEBSHOP_ROUTES),
  },
  {
    path: 'backoffice',
    loadChildren: () =>
      import('./modules/back-office/router').then(mod => mod.BACKOFFICE_ROUTES),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
