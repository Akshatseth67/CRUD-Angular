import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  id:any='';

  employeeDatails : Employee ={
    id:'',
    name:'',
    email:'',
    phone:0,
    department:'',
    salary:0    
  };

  constructor(private route:ActivatedRoute,private servie:EmployeesService,private router:Router) {

   }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        this.id = params.get('id');

        if(this.id){
          this.servie.GetEmployee(this.id).subscribe({
            next:(res)=>{
              this.employeeDatails = res;

            }
          })

        }
      }

    })
  }

  UpdateEmployee(){
    this.servie.UpdateEmployee(this.id,this.employeeDatails).subscribe({
      next:res => {
        this.router.navigate(['employees']);

      }
    });
  }

  DeleteEmployee(id:string){
   this.servie.DeleteEmployee(id).subscribe({
    next:res => {
      this.router.navigate(['employees']);
    }
   })
  }

}
