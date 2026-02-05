import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = environment.serverURL;

  constructor(private http: HttpClient) {}

  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
}
