import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule, MatTableModule, MatSortModule, MatNativeDateModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { SharedModule } from '../shared/shared.module';
import { CountriesResolver } from '../shared/services/countries.resolver';
import { EmployeeJobTitleComponent } from './components/employee-job-title/employee-job-title.component';
import { EmployeSaveDeactivate } from './services/employe-save.deactivate';
import { LeaveEmployeeSaveDialogComponent } from './components/leave-employee-save-dialog/leave-employee-save-dialog.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'add',
        data: {
            mode: 'add'
        },
        resolve: {
            countries: CountriesResolver
        },
        component: EmployeeFormComponent
    },
    {
        path: 'edit/:id',
        data: {
            mode: 'edit'
        },
        canDeactivate: [EmployeSaveDeactivate],
        resolve: {
            countries: CountriesResolver
        },
        component: EmployeeFormComponent
    },
    {
        path: 'view/:id',
        data: {
            mode: 'view'
        },
        resolve: {
            countries: CountriesResolver
        },
        component: EmployeeFormComponent
    }
];

@NgModule({
    declarations: [
        MainComponent,
        EmployeeListComponent,
        EmployeeFormComponent,
        EmployeeJobTitleComponent,
        LeaveEmployeeSaveDialogComponent
    ],
    entryComponents: [
        LeaveEmployeeSaveDialogComponent
    ],
    providers: [
        EmployeSaveDeactivate
    ],
    imports: [
        RouterModule.forChild(routes),
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        MatButtonModule,
        MatGridListModule,
        MatButtonToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        MatDialogModule,
        CommonModule,
        SharedModule
    ]
})
export class EmployeeRoutingModule { }
