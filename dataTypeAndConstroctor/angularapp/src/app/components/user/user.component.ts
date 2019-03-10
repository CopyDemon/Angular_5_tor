import { Component } from "@angular/core";
// import { ViewUpdateFn } from "@angular/core/src/view";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent {
  //Props
  firstName: string;
  lastName: string;
  age: number = 30;
  address;
  fool: any;
  hasKids: boolean;
  numberArray: number[];
  stringArray: string[];
  mixedArray: any[];
  myTuple: [string, number, boolean];
  unusable: void;
  u: undefined;
  n: null;

  //Methods
  constructor() {
    this.firstName = "John";
    this.lastName = "Doe";
    this.age = 30;

    this.address = {
      street: "50 main street",
      city: "Boston",
      state: "MA"
    };

    this.hasKids = true;
    this.numberArray = [1, 2, 3, 4, 5];
    this.stringArray = ["hello", "you"];
    this.mixedArray = [true, "hh", 123];
    this.myTuple = ["hello", 2, true];
    this.unusable = undefined;
    this.u = undefined;
    this.n = null;
  }

  /************************************************************************************************/
  //this is the way how to assign a variable type for a function's argument and return value.
  // this is the for the normal function.
  addNumber(num1: number, num2: number): number {
    return num1 + num2;
  }
  // this is the wrong way for the arrow function
  // addNumber: number = (num1: number, num2: number) => {
  //   return num1 + num2;
  // };

  /*
   * this is the correct way for the arrwo function, which is need to use the arrow function to return
   * a normal function and then return the value of a normal function's return value.
   *
   */
  // myAdd: (x: number, y: number) => number = function(
  //   x: number,
  //   y: number
  // ): number {
  //   return x + y;
  // };
  /************************************************************************************************/

  showAge = () => this.age + 2;

  sayHello() {
    console.log(`Hello ${this.firstName}`);
  }

  hasBirthday() {
    this.age += 1;
  }
}
