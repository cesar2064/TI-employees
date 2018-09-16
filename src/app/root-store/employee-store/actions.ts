import { Action } from '@ngrx/store';
import { IEmployeeModel } from '../../shared/models/employee.model';

export enum ActionTypes {
  EMPLOYEE_REQUEST = 'Employee list request',
  EMPLOYE_SUCCESS = 'Employee detail',
  EMPLOYE_ERROR = 'Employee save'
}

export class EmployeeRequestAction implements Action {
  readonly type = ActionTypes.EMPLOYEE_REQUEST;
  constructor(public payload: { filter: any }) { }
}

export class EmployeeSuccessAction implements Action {
  readonly type = ActionTypes.EMPLOYE_SUCCESS;
  constructor(public payload: { employees: IEmployeeModel[] }) { }
}

export class EmployeeErrorAction implements Action {
  readonly type = ActionTypes.EMPLOYE_ERROR;
  constructor(public payload: { error: string }) { }
}

export type Actions = EmployeeRequestAction | EmployeeSuccessAction | EmployeeErrorAction;
