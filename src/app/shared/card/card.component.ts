import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Card } from '../../Core/models/card.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() cardInfo?: Card = undefined;

  @Output() viewMoreEvent = new EventEmitter<number>();

  viewMore(id: number) {
    this.viewMoreEvent.emit(id);
  }
}
