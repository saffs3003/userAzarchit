import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

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
  searchForm = new FormGroup({
    searchKey: new FormControl(''),
  });

  constructor(private userService: UserService) {}

  page = 1;
  pageSize = 5;
  paginatedUsers?: User[];
  searchResultList?: User[];
  view = 'table';
  isLoading = false;

  ngOnInit() {
    const savedView = localStorage.getItem('userViewPreference');
    if (savedView === 'table' || savedView === 'card') {
      this.view = savedView;
    }
    this.isLoading = true;
    this.userService.fetchUsers().subscribe((data) => {
      this.users = data;
      this.searchResultList = this.users;
      this.setCurrentPage();
      this.isLoading = false;
    });
  }
  ngOnChanges() {
    debugger;
    this.setCurrentPage();
  }

  setCurrentPage() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedUsers = this.searchResultList?.slice(start, end);
  }

  onPageChange(page: number) {
    this.page = page;
    this.setCurrentPage();
  }
  changeView(viewType: string) {
    this.view = viewType;
    localStorage.setItem('userViewPreference', viewType);
  }
  searchResult() {
    const searchKey = this.searchForm.value.searchKey?.trim().toLowerCase();

    if (!searchKey) {
      this.searchResultList = this.users;

      return;
    }

    this.searchResultList = this.users?.filter((user) => {
      return (
        user.name.toLowerCase().includes(searchKey) ||
        user.email.toLowerCase().includes(searchKey)
      );
    });
    this.page = 1;
    this.setCurrentPage();

    console.log(this.searchResultList, 'sesadadadsarchlist');
  }
}
