import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { User }              from './user';
import { UserService }       from './user.service';

@Component({
  moduleId: module.id,
  selector: 'my-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css']
})

export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(
    private router: Router,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  gotoDetail(): void {
    this.router.navigate(['/users', this.selectedUser.id]);
  }
}
