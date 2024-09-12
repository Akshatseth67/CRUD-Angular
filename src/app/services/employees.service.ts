import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiURL: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  GetAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseApiURL + '/api/employees')
  }

  AddEmployee(addEmployeeRequest:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.baseApiURL+'/api/employees',addEmployeeRequest);
  }

  GetEmployee(id:string):Observable<Employee>{
    return this.http.get<Employee>(this.baseApiURL + '/api/employees/'+id);
  }

  UpdateEmployee(id:string,newdata:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.baseApiURL+'/api/employees/'+id,newdata);
  }

  DeleteEmployee(id:string):Observable<Employee>{
   return this.http.delete<Employee>(this.baseApiURL+'/api/employees/'+id);
  }
}
