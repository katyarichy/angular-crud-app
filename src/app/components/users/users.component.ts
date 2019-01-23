import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user-service.service';
import { User } from '../../models/user';

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];

  addForm: FormGroup;
  Name: string; 
  About: string;

  onSubmit(modal) {
    this.userService.addUser(this.addForm.value).subscribe(data => this.users = data);
    modal.hide();
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user._id).subscribe(data => this.users = data);
  }

  constructor(private userService: UserService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => this.users = data);

    this.addForm = this.formBuilder.group({
      _id: [],
      name: [this.Name],
      about: [this.About]
    });
  }

}
