import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IEmployeeModel } from '../../shared/models/employee.model';

export const featureAdapter: EntityAdapter<
IEmployeeModel
> = createEntityAdapter<IEmployeeModel>({
  selectId: model => model.id,
  sortComparer: (a: IEmployeeModel, b: IEmployeeModel): number =>
    a.id.toString().localeCompare(b.id.toString())
});

export interface State extends EntityState<IEmployeeModel>  {
    employees: IEmployeeModel[];
    isLoading: boolean;
    error: string;
}

export const initialState: State = featureAdapter.getInitialState({
    employees: [],
    isLoading: false,
    error: null
});
