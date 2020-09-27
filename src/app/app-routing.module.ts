import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonnalSectionComponent } from './personnal-section/personnal-section.component';
import { ProfessionalSectionComponent } from './professional-section/professional-section.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },      // Default route  
  { path: "home", component: HomeComponent },                           // home component
  { path: "personnal-section", component: PersonnalSectionComponent },  // personnal section component
  { path: "professional-section", component: ProfessionalSectionComponent },  // professional section component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
