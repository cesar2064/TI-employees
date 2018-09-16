import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import { State } from './state';
import { IEmployeeModel } from '../../shared/models/employee.model';

const getError = (state: State): any => state.error;

const getIsLoading = (state: State): boolean => state.isLoading;

const getEmployees = (state: State): IEmployeeModel[] => state.employees;

export const selecEmployeeState: MemoizedSelector<
    object,
    State
    > = createFeatureSelector<State>('myFeature');

export const selectEmployeeError: MemoizedSelector<object, any> = createSelector(
    selecEmployeeState,
    getError
);

export const selectEmployeeIsLoading: MemoizedSelector<
    object,
    boolean
    > = createSelector(selecEmployeeState, getIsLoading);

export const selectEmployeeList: MemoizedSelector<
    object,
    IEmployeeModel[]
    > = createSelector(selecEmployeeState, getEmployees);
