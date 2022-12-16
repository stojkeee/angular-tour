import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-webshop',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  styles: [``],
})
export class WebshopComponent {}
