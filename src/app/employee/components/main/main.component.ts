import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootStoreState, EmployeeStoreSelectors, EmployeeStoreActions } from '../../../root-store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private store$: Store<RootStoreState.State>
  ) { }

  ngOnInit() {
    this.store$.select(
      EmployeeStoreSelectors.selectEmployeeList
    );
    this.store$.dispatch(new EmployeeStoreActions.EmployeeRequestAction({ filter: {} }));
  }

}
