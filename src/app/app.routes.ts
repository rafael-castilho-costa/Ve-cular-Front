
import {RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { fullComponent } from './full/full.component';
import { NgModule } from '@angular/core';

import { VisitantesComponent } from './visitantes/visitantes.component';
import { VeiculosComponent } from './veiculos/veiculos.component';


export const routes: Routes = [
      {
        path:'',
        component: fullComponent,

        children: [
          {
            path:'',
            redirectTo:'dashboard',
            pathMatch:'full'
          },
          {
            path: 'dashboard', component: DashboardComponent,
          },
          {
            path:'visitantes', component: VisitantesComponent,
          },
          {
            path:'veiculos', component: VeiculosComponent,
          },
        ]
      },
      {
          path:'login', component:LoginComponent,
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRountingModule{}
