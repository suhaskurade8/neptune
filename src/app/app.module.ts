import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonnalSectionComponent } from './personnal-section/personnal-section.component';
import { ProfessionalSectionComponent } from './professional-section/professional-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonnalSectionComponent,
    ProfessionalSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
