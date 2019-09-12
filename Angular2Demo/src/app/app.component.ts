//import { Component } from '@angular/core';

//@Component({
//  selector: 'my-app',
//  template: `<h1>Hello {{name}}</h1>`,
//})
//export class AppComponent  { name = 'Angular 2 From Kavi Change to load by VS2019 !!!'; }

//*****************************************************************************************

/// Angular Componant have
///  Template
///  class
///  decorator

//Decorator
import { Component } from "@angular/core" // This is a Decorator

// Template is a Meta Data
@Component({
    selector: 'my-app', // This is the Directive that direct the component tamplate to the index.html <my-app> tag...
    //template: `<h1> Hello {{name}} </h1>` // This is inline view template
    //templateUrl: 'app/app.component.html' // This is external view template

    template: `
                <div>
                    <h1>{{pageHeader}}</h1>
                    <my-employee></my-employee>
                </div>
                `
})

// class of Angular
export class AppComponent 
{
    //name: string = "Angular";
    //age: any = 5;

    pageHeader: string = 'My Employee Details';
}
