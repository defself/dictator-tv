"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var USERS = [
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
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Dictator's respected Users";
        this.users = USERS;
    }
    AppComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'dictator-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>My Users</h2>\n    <ul class=\"users\">\n      <li *ngFor=\"let user of users\"\n          (click)=\"onSelect(user)\"\n          [class.selected]=\"user === selectedUser\">\n        <span class=\"badge\">{{user.id}}</span> {{user.name}}\n      </li>\n    </ul>\n\n    <user-detail [user]=\"selectedUser\"></user-detail>\n  ",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .users {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .users li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .users li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .users li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .users .text {\n      position: relative;\n      top: -3px;\n    }\n    .users .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map