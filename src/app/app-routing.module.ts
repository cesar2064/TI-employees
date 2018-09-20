import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonLayoutComponent } from './core/layouts/common-layout/common-layout.component';
const routes: Routes = [
    {
        path: '', redirectTo: 'employees', pathMatch: 'full'
    },
    {
        path: 'employees', component: CommonLayoutComponent, loadChildren: './employee/employee.module#EmployeeModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
