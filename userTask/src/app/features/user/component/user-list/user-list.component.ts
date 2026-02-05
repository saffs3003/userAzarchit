import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardComponent } from '../../../card/card.component';
import { CommonModule } from '@angular/common';
import { User } from '../../../../core/services/user.service';
import { NgForOf } from '@angular/common';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CardComponent, NgForOf, CommonModule, NgbPagination],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  @Input() users?: User[] = [];
  @Input() page = 1;
  @Input() pageSize = 3;
  @Input() totalUsers = 0;
  @Output() pageChange = new EventEmitter<number>();
}
