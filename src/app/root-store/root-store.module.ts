import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeStoreModule } from './employee-store/employee-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EmployeeStoreModule,
    SharedModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  declarations: []
})
export class RootStoreModule { }
