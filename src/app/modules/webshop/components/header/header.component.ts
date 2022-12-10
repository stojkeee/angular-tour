import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  items: { id: string; route: string }[] = [
    {
      id: 'products',
      route: '',
    },
    {
      id: 'chart',
      route: 'chart',
    },
  ];
}
