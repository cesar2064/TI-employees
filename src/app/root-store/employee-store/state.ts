import { IEmployeeModel } from '../../shared/models/employee.model';

export interface State {
    employees: IEmployeeModel[];
    isLoading: boolean;
    error: string;
}

export const initialState: State = {
    employees: [],
    isLoading: false,
    error: null
};
