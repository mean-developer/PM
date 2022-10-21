import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/layout',pathMatch: 'full'},
  {path:"layout",loadChildren:() => import('./layout/layout.module').then(m=>m.LayoutModule)},
   { path:"login",loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'forgotpwd', loadChildren: () => import('./forgotpwd/forgotpwd.module').then(m => m.ForgotpwdModule) },
  { path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
