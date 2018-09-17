import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IEmployeeModel } from '../../../shared/models/employee.model';
import { MatTableDataSource, MatSort } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { CommonComponent } from '../../../shared/abstract/common-component.abstract';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent extends CommonComponent implements OnInit {

  @Input() employees: IEmployeeModel[];
  @Input() searchForm: {
    group: FormGroup,
    controlName: string
  };
  @ViewChild(MatSort) sort: MatSort;
  employeeDataSource: MatTableDataSource<IEmployeeModel>;
  displayedColumns: string[] = ['id', 'name', 'age', 'username', 'hireDate', 'actions'];

  ngOnInit() {
    this.employeeDataSource = new MatTableDataSource(this.employees);
    this.employeeDataSource.sort = this.sort;
    const searchControl = this.searchForm.group.controls[this.searchForm.controlName] as FormControl;

    // search functionality
    searchControl.valueChanges.pipe(
      takeUntil(this.destroy$),
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe((value) => {
      this.employeeDataSource.filter = value.trim().toLowerCase();
    });
  }

}
