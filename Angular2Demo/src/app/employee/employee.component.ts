import { Component } from "@angular/core"

//Meta DAta
@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})

export class EmployeeComponent
{
    firstName: string = 'Tom';
    lastName: string = 'Sindum';
    gender: string = 'Male';
    age: number = 39;
}