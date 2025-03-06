import { Component } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
import { LogoutButtonComponent } from '../shared/logout-button/logout-button.component';

@Component({
  selector: 'app-trainings',
  imports: [LogoutButtonComponent, CardComponent],
  templateUrl: './trainings.component.html',
  styleUrl: './trainings.component.scss'
})
export class TrainingsComponent {

}
