import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatInputModule],
  template: `
    <div class="p-20">
      <mat-form-field appearance="outline">
        <mat-label>Label</mat-label>
        <input
          matInput
          placeholder="Placeholder" />
      </mat-form-field>
    </div>
  `,
  styles: [``],
})
export class LoginComponent {}
