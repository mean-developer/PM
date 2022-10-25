import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { OtpComponent } from './otp/otp.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: 'otp', component: OtpComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
