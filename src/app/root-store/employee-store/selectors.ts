import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import { featureAdapter, State } from './state';
import { RootStoreState } from '../../root-store';
import { IEmployeeModel } from '../../shared/models/employee.model';

const getError = (state: State): any => state.error;

const getIsLoading = (state: State): boolean => state.isLoading;

export const selecEmployeeState: MemoizedSelector<
    object,
    State
    > = createFeatureSelector<State>('employee');

export const selectAllEmployees: (
    state: object
) => IEmployeeModel[] = featureAdapter.getSelectors(selecEmployeeState).selectAll;


export const findOneEmployee = (id: number | string) =>
    createSelector(
        (state: RootStoreState.State) => state.employee.employees,
        (employees) => {
            return employees.find((employee) => Number(id) === employee.id);
        });


export const selectEmployeeError: MemoizedSelector<object, any> = createSelector(
    selecEmployeeState,
    getError
);

export const selectEmployeeIsLoading: MemoizedSelector<
    object,
    boolean
    > = createSelector(selecEmployeeState, getIsLoading);
