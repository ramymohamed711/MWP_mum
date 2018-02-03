import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudentsComponent } from './students/students.component';
import { DbserviceService } from './dbservice.service';
import { ProfileComponent } from './profile/profile.component'
import { ErrorGuard } from "./error.guard";

const MY_ROUTS = [
  {path:'' , redirectTo:'home', pathMatch:'full' } , 
  {path:'home' , component: HomeComponent }, 
  {path:'about', component: AboutComponent },
  {path:'students', component: StudentsComponent },
  {path:'profile/:id', component: ProfileComponent , canActivate:[ErrorGuard] },
  {path:'**' , redirectTo:'home' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    StudentsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(MY_ROUTS)
  ],
  providers: [DbserviceService , ErrorGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
