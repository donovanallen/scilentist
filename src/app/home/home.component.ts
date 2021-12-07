import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild("marqueeItem", { static: false }) marqueeItem: any;

  name = "Donovan Allen";
  location = "Brooklyn, NY";
  list = [
    "full-stack web developer",
    "creator",
    "athlete",
    "musician",
    "UX designer",
  ];
  typed = "";
  el: any;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.el = this.marqueeItem.nativeElement;
    console.log(this.el);
    this.startType(this.getRandomItem(), 0);
  }

  startType(item: any, index: any) {
    if (index < item.length) {
      this.typed += item.charAt(index);
      this.el.innerHTML = this.typed;
      index++;
      setTimeout(() => {
        this.startType(item, index);
      }, 50);
    } else {
      setTimeout(() => {
        this.el.classList.add("highlight");
      }, 4000);

      setTimeout(() => {
        this.el.classList.remove("highlight");
        this.typed = "";
        this.el.innerHTML = this.typed;
        this.startType(this.getRandomItem(), 0);
      }, 5000);
    }
  }

  getRandomItem() {
    const index = Math.floor(Math.random() * this.list.length);
    return this.list[index];
  }
}