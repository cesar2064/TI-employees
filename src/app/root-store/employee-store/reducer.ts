import { Actions, ActionTypes } from './actions';
import { featureAdapter, initialState, State } from './state';

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
