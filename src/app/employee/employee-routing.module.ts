import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent
    }
];

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class EmployeeRoutingModule { }
