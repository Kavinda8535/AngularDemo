import { NgModule }      from '@angular/core'; // Meta Data Provider...
import { BrowserModule } from '@angular/platform-browser'; //  Broswer run Angular And ng if || ng for directives  provided...

import { AppComponent } from './app.component';

import { EmployeeComponent } from './employee/employee.component'

//Meta Data
@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, EmployeeComponent], // Registering the comonent in this Module
    bootstrap:    [ AppComponent ] // This is the main component(Root component) that bootstrap our application...
})
export class AppModule { } // AppMOdile is the root module wich bootstraps and launches the angular application
