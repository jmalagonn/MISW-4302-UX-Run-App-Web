import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Card } from '../../Core/models/card.model';

@Component({
  selector: 'app-trainings-dialog',
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIcon],
  templateUrl: './trainings-dialog.component.html',
  styleUrl: './trainings-dialog.component.scss'
})
export class TrainingsDialogComponent {
  readonly dialogRef = inject(MatDialogRef<TrainingsDialogComponent>);
  readonly data = inject<{ training: Card }>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
