import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap, startWith, withLatestFrom, filter } from 'rxjs/operators';
import * as featureActions from './actions';
import { EmployeeService } from '../../shared/services/employee.service';
import { IEmployeeModel } from '../../shared/models/employee.model';
import { RootStoreState } from '..';

@Injectable()
export class EmployeeStoreEffects {
    constructor(
        private employeeService: EmployeeService,
        private actions$: Actions,
        private store$: Store<RootStoreState.State>
    ) { }

    private employeeList: IEmployeeModel[];

    @Effect()
    employeeRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.EmployeeRequestAction>(
            featureActions.ActionTypes.EMPLOYEE_REQUEST
        ),
        startWith(new featureActions.EmployeeRequestAction({ filter: {} })),
        withLatestFrom(this.store$),
        switchMap(actionAndState => {
            return this.employeeService
                .list()
                .pipe(
                    map(
                        employees => new featureActions.EmployeeSuccessAction({
                            employees
                        })
                    ),
                    catchError(error =>
                        observableOf(new featureActions.EmployeeErrorAction({ error }))
                    )
                );
        })
    );
}
