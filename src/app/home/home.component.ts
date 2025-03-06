import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { LogoutButtonComponent } from '../shared/logout-button/logout-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    MatButton,
    LogoutButtonComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor (private router: Router) {}

  goTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
