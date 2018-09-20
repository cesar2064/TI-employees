import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
  EmployeeStoreSelectors
} from './employee-store';


export const selectError: MemoizedSelector<object, string> = createSelector(
    EmployeeStoreSelectors.selectEmployeeError,
  (employeeError: string) => {
    return employeeError;
  }
);

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
    EmployeeStoreSelectors.selectEmployeeIsLoading,
  (employee: boolean) => {
    return employee;
  }
);
