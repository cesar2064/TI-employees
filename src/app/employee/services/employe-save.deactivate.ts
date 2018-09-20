import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate, Router } from '@angular/router';
import { EmployeeFormComponent } from '../components/employee-form/employee-form.component';
import { MatDialog } from '@angular/material';
import { LeaveEmployeeSaveDialogComponent } from '../components/leave-employee-save-dialog/leave-employee-save-dialog.component';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeSaveDeactivate implements CanDeactivate<EmployeeFormComponent> {

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) { }

  canDeactivate(
    component: EmployeeFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot): boolean {
    if (component.employeeForm.dirty && !component.isSaving) {
      const dialog = this.dialog.open(LeaveEmployeeSaveDialogComponent, {
        width: '250px'
      });
      dialog.afterClosed().pipe(take(1)).subscribe((leave) => {
        if (leave) {
          component.employeeForm.markAsPristine();
          this.router.navigate(['/employees']);
        }
      });
      return false;
    }
    return true;
  }
}
