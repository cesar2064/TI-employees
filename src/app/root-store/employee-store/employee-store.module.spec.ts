import { EmployeeStoreModule } from './employee-store.module';

describe('EmployeesStoreModule', () => {
  let employeesStoreModule: EmployeeStoreModule;

  beforeEach(() => {
    employeesStoreModule = new EmployeeStoreModule();
  });

  it('should create an instance', () => {
    expect(employeesStoreModule).toBeTruthy();
  });
});
