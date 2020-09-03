import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from '../pages/pages.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { Grafica1Component } from '../pages/grafica1/grafica1.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            {path: '', component: DashboardComponent, data: {title: 'Dashboard'}},
            {path: 'progress', component: ProgressComponent, data: {title: 'ProgressBar'}},
            {path: 'grafica1', component: Grafica1Component, data: {title: 'Gráfica #1'}},
            {path: 'account-settings', component: AccountSettingsComponent, data: {title: 'Tema'}},
            {path: 'promises', component: PromisesComponent, data: {title: 'Promesas'}},
            {path: 'rxjs', component: RxjsComponent, data: {title: 'Rxjs'}},
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
