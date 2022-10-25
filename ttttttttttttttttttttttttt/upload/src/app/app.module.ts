import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { CommonHeaderComponent } from './shared/common-header/common-header.component';
import { AdStepOneComponent } from './components/ad-step-one/ad-step-one.component';
import { RegistrationTypeComponent } from './pages/registration-type/registration-type.component';
import { IndividualSignupComponent } from './pages/individual-signup/individual-signup.component';
import { ProfessionalSignupComponent } from './pages/professional-signup/professional-signup.component';
import { PorschistsModule } from './porschists/porschists.module';
// import { HeaderSeparateComponent } from './porschists/header-separate/header-separate.component';
@NgModule({
  declarations: [
    // HeaderSeparateComponent,
    AppComponent,
    CommonHeaderComponent,
    AdStepOneComponent,
    RegistrationTypeComponent,
    IndividualSignupComponent,
    ProfessionalSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PorschistsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
