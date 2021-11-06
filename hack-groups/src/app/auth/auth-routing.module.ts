import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import Urls from '../_core/constants/Urls';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', redirectTo: Urls.LOGIN, pathMatch: 'full' },
  {
    path: Urls.LOGIN,
    component: LoginComponent
  },
  {
    path: Urls.REGISTER,
    component: RegisterComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
