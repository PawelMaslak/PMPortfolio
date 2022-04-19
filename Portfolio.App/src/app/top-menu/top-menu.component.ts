import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {

  previousWindowPosition = 0;

  constructor() { }

  hidden = false;

  onWindowScroll() {
    var currentPageOffset = window.pageYOffset;
    this.previousWindowPosition > currentPageOffset ? this.hidden = false : this.hidden = true;
    this.previousWindowPosition = currentPageOffset;
  }
}
