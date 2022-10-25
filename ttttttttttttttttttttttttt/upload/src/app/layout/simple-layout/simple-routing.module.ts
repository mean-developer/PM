
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent, CategoriesComponent, DetailComponent, ForgotPassComponent, HomePageComponent, ItsDoneComponent, OtpComponent, SigninComponent, SignupComponent } from 'src/app/pages';
import { IndividualSignupComponent } from 'src/app/pages/individual-signup/individual-signup.component';
import { ProfessionalSignupComponent } from 'src/app/pages/professional-signup/professional-signup.component';
import { RegistrationTypeComponent } from 'src/app/pages/registration-type/registration-type.component';
import { SimpleLayoutComponent } from './simple-layout.component';



const routes: Routes = [{
  path: '',
  component: SimpleLayoutComponent,
  data: { title: 'signin' },
  children: [
    { path: '', redirectTo: 'home-page', pathMatch: 'full', },
    { path: 'home-page', component: HomePageComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'accueil', component: AccueilComponent },
    { path: 'detail', component: DetailComponent },
    { path: 'forgot-pass', component: ForgotPassComponent },
    { path: 'otp', component: OtpComponent },
    { path: 'its-done', component: ItsDoneComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'toa', component: RegistrationTypeComponent },        //toa means -------Type Of Account
    { path: 'is', component: IndividualSignupComponent },          //is means ---individual signup
    { path: 'ps', component: ProfessionalSignupComponent }           // ps means ----professional signup
  ]
},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleRoutingModule { }