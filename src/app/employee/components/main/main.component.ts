import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootStoreState, EmployeeStoreSelectors, EmployeeStoreActions } from '../../../root-store';
import { Observable } from 'rxjs';
import { IEmployeeModel } from '../../../shared/models/employee.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  employees$: Observable<IEmployeeModel[]>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;
  searchForm: FormGroup;

  constructor(
    private store$: Store<RootStoreState.State>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.searchForm = this.fb.group(
      {
        valueToSearch: []
      }
    );
    this.employees$ = this.store$.select(
      EmployeeStoreSelectors.selectAllEmployees
    );
    this.isLoading$ = this.store$.select(
      EmployeeStoreSelectors.selectEmployeeIsLoading
    );
    this.error$ = this.store$.select(
      EmployeeStoreSelectors.selectEmployeeError
    );
    this.store$.dispatch(new EmployeeStoreActions.EmployeeRequestAction({ filter: {} }));
  }

}
