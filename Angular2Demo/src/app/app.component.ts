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
                    <img src ='https://cdn.pixabay.com/{{imagePath}}'/> 
                    <h2>{{'Full Name : ' + getFullName()}}</h2>
                    <my-employee></my-employee>
                    <button [disabled]='isDisabled'> Click Me </button> <!-- Property binding - non string data value we must use property binding -->
                    <span bind-innerHtml = 'pageHeader'></span> <!-- canonicle Property binding -->
                    <div> {{ badHtml }} </div>
                    <div innerHtml>{{badHtml}}</div> <!-- Interpolation Auto sanitize Malicious Content before displaying it-->
                    <div [innerHtml]='badHtml'>{{badHtml}}</div> <!-- Property binding Auto sanitize Malicious Content before displaying it -->
                </div>
                `
})

// class of Angular
export class AppComponent 
{
    //name: string = "Angular";
    //age: any = 5;

    pageHeader: string = 'Employee Details';
    imagePath: string = 'photo/2016/11/18/11/16/social-1834009_960_720.png';
    isDisabled: boolean = false;
    badHtml: string = 'Hello <script> alert("Hacked"); </script> World';

    firstName: string = 'Jacklin';
    lastName: string = 'Rolling';

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }


}
