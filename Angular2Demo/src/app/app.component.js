//import { Component } from '@angular/core';
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var core_1 = require("@angular/core"); // This is a Decorator
// Template is a Meta Data
var AppComponent = (function () {
    function AppComponent() {
        //name: string = "Angular";
        //age: any = 5;
        this.pageHeader = 'Employee Details';
        this.imagePath = 'photo/2016/11/18/11/16/social-1834009_960_720.png';
        this.isDisabled = false;
        this.badHtml = 'Hello <script> alert("Hacked"); </script> World';
        this.firstName = 'Jacklin';
        this.lastName = 'Rolling';
    }
    AppComponent.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        //template: `<h1> Hello {{name}} </h1>` // This is inline view template
        //templateUrl: 'app/app.component.html' // This is external view template
        template: "\n                <div>\n\n                    <input id='inputId' type='text' value='Tom'> <!-- Property value can change but attribute value cannot. Coz properties are define by the DOM(DOM elements is changing when text box value change by user) and Attributes define by the HTML -->\n                                                                 <!-- HTML Attribuites are button , img, span but DOM properties are disabled , scr , innerHtml (<img src ='https://cdn.pixabay.com'/> , <button [disabled]='isDisabled'> Click Me </button> ) -->\n\n                    <h1>{{pageHeader}}</h1>\n                    <img src ='https://cdn.pixabay.com/{{imagePath}}'/> \n                    <h2>{{'Full Name : ' + getFullName()}}</h2>\n                    <my-employee></my-employee>\n                    <button [disabled]='isDisabled'> Click Me </button> <!-- Property binding - non string data value we must use property binding -->\n                    <span bind-innerHtml = 'pageHeader'></span> <!-- canonicle Property binding -->\n                    <div> {{ badHtml }} </div>\n                    <div innerHtml>{{badHtml}}</div> <!-- Interpolation Auto sanitize Malicious Content before displaying it-->\n                    <div [innerHtml]='badHtml'>{{badHtml}}</div> <!-- Property binding Auto sanitize Malicious Content before displaying it -->\n                </div>\n                "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map