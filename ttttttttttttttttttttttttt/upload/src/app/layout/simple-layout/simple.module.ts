
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleRoutingModule } from './simple-routing.module';
import { SimpleLayoutComponent } from './simple-layout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AccueilComponent, CategoriesComponent, DetailComponent, ForgotPassComponent, HomePageComponent, ItsDoneComponent, OtpComponent, SigninComponent, SignupComponent } from 'src/app/pages';
import { HeaderComponent } from 'src/app/shared';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
@NgModule({
    imports: [
        CommonModule,
        SimpleRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations:[
        HeaderComponent,
        SimpleLayoutComponent,
        SigninComponent,
        HomePageComponent,
        FooterComponent,
        CategoriesComponent,
        AccueilComponent,
        DetailComponent,
        ForgotPassComponent,
        OtpComponent,
        ItsDoneComponent,
        SignupComponent
    ],
    providers:[
        
    ]
})
export class SimpleModule {

 }