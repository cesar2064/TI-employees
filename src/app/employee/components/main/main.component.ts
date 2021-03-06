import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootStoreState, EmployeeStoreSelectors, EmployeeStoreActions } from '../../../root-store';
import { Observable } from 'rxjs';
import { IEmployeeModel } from '../../../shared/models/employee.model';
import { takeUntil } from 'rxjs/operators';
import { CommonComponent } from '../../../shared/abstract/common-component.abstract';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends CommonComponent implements OnInit {
  employees: IEmployeeModel[];
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(
    private store$: Store<RootStoreState.State>
  ) {
    super();
  }

  ngOnInit() {

    this.isLoading$ = this.store$.select(
      EmployeeStoreSelectors.selectEmployeeIsLoading
    ).pipe(takeUntil(this.destroy$));
    this.error$ = this.store$.select(
      EmployeeStoreSelectors.selectEmployeeError
    ).pipe(takeUntil(this.destroy$));
    this.store$.select('employee').pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.employees = data.employees;
    });
  }

}
