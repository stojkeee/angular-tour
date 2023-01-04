import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoaderService } from './core/loader.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, MatProgressBarModule],
  selector: 'app-root',
  template: `
    <div class="relative">
      <mat-progress-bar
        *ngIf="isLoading$ | async"
        mode="indeterminate"
        class="absolute top-0 z-10">
      </mat-progress-bar>
      <div class="absolute w-full top-0">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [``],
})
export class AppComponent {
  isLoading$: Observable<boolean> = this.loaderService.isLoading$;

  constructor(private loaderService: LoaderService) {}
}
