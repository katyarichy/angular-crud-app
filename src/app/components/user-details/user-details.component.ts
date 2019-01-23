import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from "../../services/user-service.service";
import { User } from '../../models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User;

  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user => this.user = user);
  }
 
  goBack(): void {
    this.location.back();
  }

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private location: Location) { }

  ngOnInit(): void {
    this.getUser();
  }

}
