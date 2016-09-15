import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { User }                   from './user';
import { UserService }            from './user.service';

@Component({
  moduleId: module.id,
  selector: 'user-detail',
  templateUrl: 'user-detail.component.html',
  styleUrls: ['user-detail.component.css']
})

export class UserDetailComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.userService.getUser(id)
        .then(user => this.user = user);
    });
  }

  goBack(): void {
    window.history.back();
  }
}
