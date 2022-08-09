import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './content/about/about.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { ContactComponent } from './content/contact/contact.component';
import { FooterComponent } from './content/footer/footer.component';
import { WelcomeComponent } from './content/welcome/welcome.component';
import { LoadingComponent } from './loading/loading.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    ContentComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    WelcomeComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faGithub,
      faLinkedin,
      faInstagram
    );
  }
}
