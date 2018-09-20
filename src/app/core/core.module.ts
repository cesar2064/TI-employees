import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [CommonLayoutComponent],
  exports: [
    CommonLayoutComponent
  ]
})
export class CoreModule { }
