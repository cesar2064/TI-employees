import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { employeeReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeStoreEffects } from './effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('employee', employeeReducer),
    EffectsModule.forFeature([EmployeeStoreEffects])
  ],
  providers: [
    EmployeeStoreEffects
  ],
  declarations: []
})
export class EmployeeStoreModule { }
