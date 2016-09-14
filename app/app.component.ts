import { Component } from '@angular/core';
import { User } from './user';

const USERS: User[] = [
  { id: 11,
    name: 'Mr. Nice',
    city: 'Uzhhorod',
    address: 'Dobrolyubova 6/50',
    sex: true
  },
  { id: 12,
    name: 'Narco',
    city: 'Uzhhorod',
    address: 'Dobrolyubova 6/50',
    sex: true
  },
  { id: 13,
    name: 'Bombasto',
    city: 'Uzhhorod',
    address: 'Dobrolyubova 6/50',
    sex: true
  },
  { id: 14,
    name: 'Celeritas',
    city: 'Uzhhorod',
    address: 'Dobrolyubova 6/50',
    sex: true
  },
  { id: 15,
    name: 'Magneta',
    city: 'Uzhhorod',
    address: 'Dobrolyubova 6/50',
    sex: true
  },
  { id: 16,
    name: 'RubberMan',
    city: 'Uzhhorod',
    address: 'Dobrolyubova 6/50',
    sex: true
  },
  { id: 17,
    name: 'Dynama',
    city: 'Uzhhorod',
    address: 'Dobrolyubova 6/50',
    sex: true
  },
  { id: 18,
    name: 'Dr IQ',
    city: 'Uzhhorod',
    address: 'Dobrolyubova 6/50',
    sex: true
  },
  { id: 19,
    name: 'Magma',
    city: 'Uzhhorod',
    address: 'Dobrolyubova 6/50',
    sex: true
  },
  { id: 20,
    name: 'Tornado',
    city: 'Uzhhorod',
    address: 'Dobrolyubova 6/50',
    sex: true
  }
];

@Component({
  selector: 'dictator-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Users</h2>
    <ul class="users">
      <li *ngFor="let user of users"
          (click)="onSelect(user)"
          [class.selected]="user === selectedUser">
        <span class="badge">{{user.id}}</span> {{user.name}}
      </li>
    </ul>

    <user-detail [user]="selectedUser"></user-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .users {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .users li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .users li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .users li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .users .text {
      position: relative;
      top: -3px;
    }
    .users .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent {
  title = "Dictator's respected Users";
  users = USERS;
  selectedUser: User;

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
