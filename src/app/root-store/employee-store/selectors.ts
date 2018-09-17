import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import { featureAdapter, State } from './state';
import { IEmployeeModel } from '../../shared/models/employee.model';

const getError = (state: State): any => state.error;

const getIsLoading = (state: State): boolean => state.isLoading;

const getEmployees = (state: State): IEmployeeModel[] => state.employees;

export const selecEmployeeState: MemoizedSelector<
    object,
    State
    > = createFeatureSelector<State>('myFeature');

export const selectAllEmployees: (
    state: object
) => IEmployeeModel[] = featureAdapter.getSelectors(selecEmployeeState).selectAll;

export const selectEmployeeById = (id: number) =>
    createSelector(this.selectAllJokeItems, (employees: IEmployeeModel[]) => {
        if (employees) {
            return employees.find(e => e.id === id);
        } else {
            return null;
        }
    });

export const selectEmployeeError: MemoizedSelector<object, any> = createSelector(
    selecEmployeeState,
    getError
);

export const selectEmployeeIsLoading: MemoizedSelector<
    object,
    boolean
    > = createSelector(selecEmployeeState, getIsLoading);
