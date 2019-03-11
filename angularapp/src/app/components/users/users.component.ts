import { Component, OnInit } from '@angular/core';
import { User } from "../../models/User"
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: "john",
        lastName: "doe",
        age: 30,
        address: {
          street: "50 main street",
          city: "Bosten",
          state: "MA"
        },
        image: 'http://lorempixel.com/600/600/people/3',
        isActive: true
      },
      {
        firstName: "Kevin",
        lastName: "Jpohnson",
        age: 34,
        address: {
          street: "20 school street",
          city: "Lynn",
          state: "MA"
        },
        image: 'http://lorempixel.com/600/600/people/2',
        isActive: false
      },
      {
        firstName: "Karen",
        lastName: "Williams",
        age: 26,
        address: {
          street: "55 Mill street",
          city: "Miami",
          state: "FL"
        },
        image: 'http://lorempixel.com/600/600/people/1',
        isActive: true
      }
    ];

    this.loaded = true

    console.log("init");

    // this.addUser({
    //   firstName: "David",
    //   lastName: "Jackson",
    // })
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
