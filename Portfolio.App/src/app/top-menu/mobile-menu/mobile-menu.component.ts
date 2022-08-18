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

  clickMenu() {
    let hamburger = document.getElementById("hamburger-1");
    let links = document.getElementById("links");
    hamburger?.classList.toggle("is-active");

    if (links!.style.opacity === "1") {
      links!.style.opacity = "0";
      links!.style.height = "0px";
    }
    else {
      links!.style.opacity = "1";
      links!.style.height = "100%";
    }
  }

  //Add method to close menu on clicking link.
}
