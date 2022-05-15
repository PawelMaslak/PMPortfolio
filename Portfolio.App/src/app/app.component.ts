import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  underConstruction: boolean = environment.underConstruction;

  async ngOnInit() {
    await this.delay(2000);
    //this.underConstruction = false;
  }

  delay(miliseconds: number) {
    return new Promise( resolve => {setTimeout(resolve, miliseconds)} );
  }
}
