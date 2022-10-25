import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullRoutingModule } from './full-routing.module';
import { FullLayoutComponent } from './full-layout.component';
import { AddPostProfessionnelsComponent, AddPostTypeComponent, AnnonceCompleteComponent, AnnoncesComponent, CheckoutComponent, DashboardComponent, DeposerUneAnnonceComponent, FavorisComponent, InvoiceComponent, MessgaeComponent, MsgIdComponent, PartMesAnnoncesComponent, PartMesAnnoncParticulierComponent, PaymentComponent, ReactivatePausedAdComponent, SmsAfterPausedComponent, TransactionComponent, UserProfileComponent } from 'src/app/components';
import { PaginationComponent, ProfileFooterComponent, ProfileHeaderComponent, SidebarComponent } from 'src/app/shared';
import { ChangePassComponent } from 'src/app/components/change-pass/change-pass.component';

//import { AdStepOneComponent } from 'src/app/components/ad-step-one/ad-step-one.component';

import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PartMesAnnoncesProfessionnelsComponent } from 'src/app/components/part-mes-annonces-professionnels/part-mes-annonces-professionnels.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AgmCoreModule } from '@agm/core';
import { HeaderSeparateComponent } from 'src/app/porschists/header-separate/header-separate.component';

// import { FooterComponent } from 'src/app/shared/footer/footer.component';
@NgModule({
  imports: [
    CommonModule,
    FullRoutingModule,
    AngularMultiSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    AngularMultiSelectModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAW36fDJzCoq-GX930yN_KMdDpvmvckn7A',
            libraries: ['places'],
    })
  ],
  declarations: [
    // HeaderSeparateComponent,
    FullLayoutComponent,
    DashboardComponent,
    SidebarComponent,
    ProfileHeaderComponent,
    PaginationComponent,
    ProfileFooterComponent,
    MessgaeComponent,
    DeposerUneAnnonceComponent,
    PartMesAnnoncesComponent,
    AnnoncesComponent,
    FavorisComponent,
    MsgIdComponent,
    ChangePassComponent,
    PartMesAnnoncParticulierComponent,
    PartMesAnnoncesProfessionnelsComponent,
    SmsAfterPausedComponent,
    ReactivatePausedAdComponent,
    AnnonceCompleteComponent,
    AddPostTypeComponent,
    AddPostProfessionnelsComponent,
    TransactionComponent,
    InvoiceComponent,
    PaymentComponent,
    CheckoutComponent,
    UserProfileComponent,
    // HeaderSeparateComponent
  ],
  providers: [],
})
export class FullModule { }
