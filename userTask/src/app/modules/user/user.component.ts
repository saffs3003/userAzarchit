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
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.fetchUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
