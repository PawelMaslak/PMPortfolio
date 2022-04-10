import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    AboutMeComponent,
    WorkExperienceComponent,
    MyProjectsComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
