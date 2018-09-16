import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function employeeReducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.EMPLOYEE_REQUEST:
            return {
                ...state,
                error: null,
                isLoading: true
            };
        case ActionTypes.EMPLOYE_SUCCESS:
            return {
                ...state,
                employees: action.payload.employees,
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
