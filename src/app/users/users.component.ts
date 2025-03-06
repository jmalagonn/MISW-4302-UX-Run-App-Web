import { Component } from '@angular/core';
import { LogoutButtonComponent } from '../shared/logout-button/logout-button.component';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-users',
  imports: [
    LogoutButtonComponent,
    CardComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

}
