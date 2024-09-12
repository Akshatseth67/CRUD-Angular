import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private service:EmployeesService,private route:Router){

  }

  addEmployeeRequest : Employee ={
    id:'00000000-0000-0000-0000-000000000000',
    name:'',
    email:'',
    phone:0,
    department:'',
    salary:0
  }

  AddEmployee(){
    this.service.AddEmployee(this.addEmployeeRequest).subscribe({
      next:(res)=>{
        this.route.navigate(['employees'])
      },
      error:(res)=>{

      }
      
    });
  }

  ngOnInit(): void {
  }

}
