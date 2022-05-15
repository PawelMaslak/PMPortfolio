import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {

  previousWindowPosition = 0;

  constructor() { }

  hidden = true;

  onWindowScroll() {
    this.hidden = true;
    // var currentPageOffset = window.pageYOffset;
    // this.previousWindowPosition > currentPageOffset ? this.hidden = false : this.hidden = true;
    // this.previousWindowPosition = currentPageOffset;
  }
}
