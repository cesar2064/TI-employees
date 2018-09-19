import { Action } from '@ngrx/store';
import { IEmployeeModel } from '../../shared/models/employee.model';

export enum ActionTypes {
  EMPLOYEE_REQUEST = 'Employee list request',
  EMPLOYE_SUCCESS = 'Employee detail',
  EMPLOYEE_SAVE = 'Employee save',
  EMPLOYEE_DELETE = 'Employee delete',
  EMPLOYE_ERROR = 'Employee error'
}

export class EmployeeRequestAction implements Action {
  readonly type = ActionTypes.EMPLOYEE_REQUEST;
  constructor(public payload: { filter: any }) { }
}

export class EmployeeSuccessAction implements Action {
  readonly type = ActionTypes.EMPLOYE_SUCCESS;
  constructor(public payload: { employees: IEmployeeModel[] }) { }
}

export class EmployeeSaveAction implements Action {
  readonly type = ActionTypes.EMPLOYEE_SAVE;
  constructor(public payload: { employee: IEmployeeModel }) { }
}

export class EmployeeDeleteAction implements Action {
  readonly type = ActionTypes.EMPLOYEE_DELETE;
  constructor(public payload: { id: number }) { }
}

export class EmployeeErrorAction implements Action {
  readonly type = ActionTypes.EMPLOYE_ERROR;
  constructor(public payload: { error: string }) { }
}

export type Actions = EmployeeRequestAction | EmployeeSuccessAction | EmployeeErrorAction | EmployeeSaveAction | EmployeeDeleteAction;
