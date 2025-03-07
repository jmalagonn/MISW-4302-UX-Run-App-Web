import { Component, inject, OnInit } from '@angular/core';
import { LogoutButtonComponent } from '../shared/logout-button/logout-button.component';
import { CardComponent } from '../shared/card/card.component';
import { Card } from '../Core/models/card.model';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UsersDialogComponent } from './users-dialog/users-dialog.component';

@Component({
  selector: 'app-users',
  imports: [
    LogoutButtonComponent,
    CardComponent,
    CommonModule,
    HttpClientModule,
    MatDialogModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private dialog: MatDialog
  ) { }

  users?: Card[] = undefined;

  ngOnInit(): void {
    this.getUsersData().subscribe(users => {
      this.users = users
    });
  }

  getUsersData(): Observable<Card[]> {
    return this.http.get<Card[]>('/assets/data/USERS_MOCK_DATA.json');
  }

  showDetails(id: number): void {
    const user = this.users?.find(u => u.id === id);
    this.dialog.open(UsersDialogComponent, { data: { user } });
  }
}
