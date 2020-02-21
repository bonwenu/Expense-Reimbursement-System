import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  employees: object;

  constructor(private employeeData:EmployeeService) { }

  ngOnInit() {
    this.employeeData.getAllEmployees().subscribe(data => {
      this.employees = data;
      console.log(this.employees);
      console.log("Employee list has been loaded");
    } );
  }

}
