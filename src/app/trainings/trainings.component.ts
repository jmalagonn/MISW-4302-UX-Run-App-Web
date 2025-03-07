import { Component } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
import { LogoutButtonComponent } from '../shared/logout-button/logout-button.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Card } from '../Core/models/card.model';
import { TrainingsDialogComponent } from './trainings-dialog/trainings-dialog.component';

@Component({
  selector: 'app-trainings',
  imports: [
    LogoutButtonComponent,
      CardComponent,
      CommonModule,
      HttpClientModule,
      MatDialogModule
    ],
  templateUrl: './trainings.component.html',
  styleUrl: './trainings.component.scss'
})
export class TrainingsComponent {
  constructor(
    private http: HttpClient,
    private dialog: MatDialog
  ) { }

  trainings?: Card[] = undefined;

  ngOnInit(): void {
    this.getTrainingsData().subscribe(trainings => {
      this.trainings = trainings
    });
  }

  getTrainingsData(): Observable<Card[]> {
    return this.http.get<Card[]>('/assets/data/TRAININGS_MOCK_DATA.json');
  }

  showDetails(id: number): void {
    const training = this.trainings?.find(t => t.id === id);
    this.dialog.open(TrainingsDialogComponent, { data: { training } });
  }
}
