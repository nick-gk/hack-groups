import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Urls } from './_core/constants/Urls';


const routes: Routes = [
  {path: '', redirectTo: Urls.DASHBOARD, pathMatch: 'full'},
  {
    path: Urls.DASHBOARD,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: Urls.AUTH,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: Urls.DASHBOARD,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
