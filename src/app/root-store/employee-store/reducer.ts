import { Actions, ActionTypes } from './actions';
import { featureAdapter, initialState, State } from './state';
import { IEmployeeModel } from '../../shared/models/employee.model';

declare var moment: any;

export function employeeReducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.EMPLOYEE_REQUEST:
            return {
                ...state,
                error: null,
                isLoading: true
            };
        case ActionTypes.EMPLOYE_SUCCESS:
            return featureAdapter.addAll(action.payload.employees, {
                ...state,
                employees: action.payload.employees,
                isLoading: false,
            });
        case ActionTypes.EMPLOYEE_SAVE:
            const employee: IEmployeeModel = action.payload.employee;
            employee.id = state.employees[state.employees.length - 1].id + 1;
            state.employees.push(employee);
            employee.hireDate = moment(employee.hireDate).format('MM/DD/YYYY');
            employee.dob = moment(employee.dob).format('MM/DD/YYYY');
            return {
                ...state,
                isLoading: false,
            };
        case ActionTypes.EMPLOYEE_DELETE:
            return {
                ...state,
                employees: state.employees.filter((emp: IEmployeeModel) => {
                    return emp.id !== action.payload.id;
                }),
                isLoading: false,
            };
        case ActionTypes.EMPLOYE_ERROR:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false
            };
        default: {
            return state;
        }
    }
}
