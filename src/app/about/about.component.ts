import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  me = {
    name: "Donovan Allen",
    age: "28",
    location: "Brooklyn, NY",
    title: "Web Developer / Software Engineer"
  };

  constructor() {}

  ngOnInit() {}
}
