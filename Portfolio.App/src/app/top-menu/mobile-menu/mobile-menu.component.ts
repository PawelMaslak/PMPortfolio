import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  open() {
    let links = document.getElementById("links");
    let bars = document.getElementById("bars");
    let close = document.getElementById("close");

    if (links!.style.opacity === "1") {
      links!.style.opacity = "0";
      links!.style.height = "0px";
    }
    else {
      links!.style.opacity = "1";
      links!.style.height = "100%";
    }
  }
}
