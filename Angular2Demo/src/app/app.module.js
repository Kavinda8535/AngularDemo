"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core"); // Meta Data Provider...
var platform_browser_1 = require("@angular/platform-browser"); //  Broswer run Angular And ng if || ng for directives  provided...
var app_component_1 = require("./app.component");
var employee_component_1 = require("./employee/employee.component");
//Meta Data
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}()); // AppMOdile is the root module wich bootstraps and launches the angular application
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [app_component_1.AppComponent, employee_component_1.EmployeeComponent],
        bootstrap: [app_component_1.AppComponent] // This is the main component(Root component) that bootstrap our application...
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map