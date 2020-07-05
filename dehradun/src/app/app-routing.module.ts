import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';

const routes: Routes = [
  { path: 'home', component:  HomeComponent },
  { path: 'contactus', component:  ContactusComponent },
  { path: 'about', component:  AboutComponent },
  { path: 'employee', component:  EmployeeComponent },
  { path: 'addemployee', component:  AddemployeeComponent },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }