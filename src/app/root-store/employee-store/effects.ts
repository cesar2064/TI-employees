import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap, startWith } from 'rxjs/operators';
import * as featureActions from './actions';
import { EmployeeService } from '../../shared/services/employee.service';

@Injectable()
export class EmployeeStoreEffects {
    constructor(private employeeService: EmployeeService, private actions$: Actions) { }

    @Effect()
    employeeRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.EmployeeRequestAction>(
            featureActions.ActionTypes.EMPLOYEE_REQUEST
        ),
        startWith(new featureActions.EmployeeRequestAction({ filter: {} })),
        switchMap(action =>
            this.employeeService
                .list()
                .pipe(
                    map(
                        employees =>
                            new featureActions.EmployeeSuccessAction({
                                employees
                            })
                    ),
                    catchError(error =>
                        observableOf(new featureActions.EmployeeErrorAction({ error }))
                    )
                )
        )
    );
}
