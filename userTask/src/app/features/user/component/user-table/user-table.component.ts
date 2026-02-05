import { Component, Input } from '@angular/core';
import { User } from '../../../../core/services/user.service';
import { NgForOf } from '@angular/common';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [NgForOf, NgbPagination, NgbHighlight],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css',
})
export class UserTableComponent {
  @Input() users?: User[];
  page = 1;
  pageSize = 5;
  paginatedUsers?: User[];
  ngOnInit() {
    this.setCurrentPage();
  }
  ngOnChanges() {
    this.setCurrentPage();
  }

  setCurrentPage() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedUsers = this.users?.slice(start, end);
  }

  onPageChange(page: number) {
    this.page = page;
    this.setCurrentPage();
  }
}
