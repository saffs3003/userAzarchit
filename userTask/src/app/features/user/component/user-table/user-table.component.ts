import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../core/services/user.service';
import { NgForOf } from '@angular/common';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [NgForOf, NgbPagination],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css',
})
export class UserTableComponent {
  @Input() users?: User[];
  @Input() page = 1;
  @Input() pageSize = 3;
  @Input() totalUsers = 0;
  @Output() pageChange = new EventEmitter<number>();

  constructor(private router: Router) {}

  userDetails(userId: number) {
    this.router.navigate(['/detail', userId]);
  }
}
