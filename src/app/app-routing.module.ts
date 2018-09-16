import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes = [
    {
        path: '', redirectTo: 'employees', pathMatch: 'full'
    },
    {
        path: 'employees', loadChildren: './employee/employee.module#EmployeeModule'
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
