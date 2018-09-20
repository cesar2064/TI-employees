import { Component, OnInit, Input, ViewChild, Output, OnChanges } from '@angular/core';
import { IEmployeeModel } from '../../../shared/models/employee.model';
import { MatTableDataSource, MatSort } from '@angular/material';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { CommonComponent } from '../../../shared/abstract/common-component.abstract';
import { RootStoreState } from '../../../root-store';
import { Store } from '@ngrx/store';
import { EmployeeDeleteAction, EmployeeSuccessAction, EmployeeRequestAction } from '../../../root-store/employee-store/actions';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent extends CommonComponent implements OnInit {

  private employeesDataSource: MatTableDataSource<IEmployeeModel>;

  searchForm: FormGroup;
  @Input()
  set employees(value: IEmployeeModel[]) {
    this.employeesDataSource = new MatTableDataSource(value);
    this.employeesDataSource.sort = this.sort;
  }
  @Input() isLoading: boolean;

  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['id', 'name', 'age', 'username', 'hireDate', 'actions'];

  constructor(
    private store$: Store<RootStoreState.State>,
    private fb: FormBuilder
  ) {
    super();
  }

  ngOnInit() {

    this.searchForm = this.fb.group(
      {
        valueToSearch: []
      }
    );

    const searchControl = this.searchForm.controls.valueToSearch as FormControl;

    // search functionality
    searchControl.valueChanges.pipe(
      takeUntil(this.destroy$),
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe((value) => {
      this.employeesDataSource.filter = value.trim().toLowerCase();
    });
  }

  delete(id: number) {
    this.store$.dispatch(new EmployeeDeleteAction({ id }));
  }

}
