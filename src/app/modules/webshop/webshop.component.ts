import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-webshop',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule],
  templateUrl: './webshop.component.html',
  styleUrls: ['./webshop.component.scss'],
})
export class WebshopComponent {}
