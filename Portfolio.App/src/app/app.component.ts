import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    this.load();
  }

  load() {
    const loader = document.querySelector('.loader') as HTMLElement;
    const main = document.querySelector('.main') as HTMLElement;

    if (!environment.animations) {
      console.log('Animations are temporaily disabled');
      loader.style.display = 'none';
      main.style.display = 'grid';
      main.style.opacity = '1';
    }
    else {
      setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.display = 'none';
  
        main.style.display = 'grid';
        setTimeout(() => {
          main.style.opacity = '1';
        }, 50);
      }, 5300);
    }
  }
}
