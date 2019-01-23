import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(JSON.parse(localStorage.getItem('Users')));
  }

  getUser(id: any): Observable<User> {
    return new Observable((observer) => {
      this.getUsers().subscribe(function(users) {
        return observer.next(users.find(user => user._id == id));
      });
    });
  }

  addUser(data): Observable<User[]> {
    return new Observable((observer) => {
      this.getUsers().subscribe(function(users) {
        data._id = users.length + 1;
        users.push(data);
        localStorage.setItem('Users', JSON.stringify(users));
        return observer.next(users);
      });
    });
  }

  deleteUser(id: any): Observable<User[]> {
    return new Observable((observer) => {
      this.getUsers().subscribe(function(users) {
        let filteredUsers = users.filter(users => users._id !== id);
        localStorage.setItem('Users', JSON.stringify(filteredUsers));
        return observer.next(filteredUsers);
      });
    });
  }

}