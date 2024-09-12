import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  
  employee:Employee[]=[];


  constructor(private service:EmployeesService) { }

  ngOnInit(): void {
  //  this.service.GetAllEmployees().subscribe(res => this.employee=res);
  this.service.GetAllEmployees().subscribe({
    next:(res) => {
      this.employee = res;
    },
    error:(res)=>{
      
    }
  })
  }

}
