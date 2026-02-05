import { Injectable } from '@angular/core';
import { User } from './user.service';
import { Input } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  @Input() users?: User[];
  constructor() {}

  page = 1;
  pageSize = 5;

  ngOnInit() {
    this.setCurrentPage();
  }
  ngOnChanges() {
    this.setCurrentPage();
  }

  setCurrentPage() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;
    return [start, end];
  }

  onPageChange(page: number) {
    this.page = page;
    this.setCurrentPage();
  }
}
