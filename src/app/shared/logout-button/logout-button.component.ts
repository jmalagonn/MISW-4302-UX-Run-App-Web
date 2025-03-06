import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-button',
  imports: [CommonModule, MatButton],
  templateUrl: './logout-button.component.html',
  styleUrl: './logout-button.component.scss'
})
export class LogoutButtonComponent {
  constructor (private router: Router) {}

  @Input() showHomeButton: boolean = false;

  goTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
