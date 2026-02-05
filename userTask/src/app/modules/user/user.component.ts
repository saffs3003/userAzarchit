import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

export interface Address {
  street: string;
  suite: string;
  city: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  users?: User[];

  constructor(private userService: UserService) {}

  page = 1;
  pageSize = 5;
  paginatedUsers?: User[];

  ngOnInit() {
    this.userService.fetchUsers().subscribe((data) => {
      this.users = data;
      this.setCurrentPage();
    });
  }
  ngOnChanges() {
    debugger;
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
