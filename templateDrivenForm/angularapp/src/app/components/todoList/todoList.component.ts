import { Component } from "@angular/core";

@Component({
  selector: "<toDoList-app></toDoList-app>",
  templateUrl: "./toDoList.html"
})
export class ToDoList {
  text1: string;
  text2: string;
  constructor() {
    this.text1 = "hello";
    this.text2 = "angular";
    this.outPutText();
  }
  outPutText = () => `${this.text1} ${this.text2}`;
}
