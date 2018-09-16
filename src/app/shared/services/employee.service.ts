import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployeeModel } from '../models/employee.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class EmployeeService {

  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get<IEmployeeModel[]>(environment.api.employee);
  }
}
