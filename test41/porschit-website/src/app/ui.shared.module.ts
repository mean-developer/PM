import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdStepOneComponent } from './ui-components/ad-step-one/ad-step-one.component';
import { AddPostTypeComponent } from './ui-components/add-post-type/add-post-type.component';
import { AnnonceCompleteComponent } from './ui-components/annonce-complete/annonce-complete.component';
import { AnnoncesComponent } from './ui-components/annonces/annonces.component';
import { ChangePassComponent } from './ui-components/change-pass/change-pass.component';
import { CheckoutComponent } from './ui-components/checkout/checkout.component';
import { DashboardComponent } from './ui-components/dashboard/dashboard.component';
import { FavorisComponent } from './ui-components/favoris/favoris.component';
import { InvoiceComponent } from './ui-components/invoice/invoice.component';
import { MessgaeComponent } from './ui-components/messgae/messgae.component';
import { MsgIdComponent } from './ui-components/msg-id/msg-id.component';
import { PartMesAnnoncParticulierComponent } from './ui-components/part-mes-annonc-particulier/part-mes-annonc-particulier.component';
import { PartMesAnnoncesComponent } from './ui-components/part-mes-annonces/part-mes-annonces.component';
import { PartMesAnnoncesProfessionnelsComponent } from './ui-components/part-mes-annonces-professionnels/part-mes-annonces-professionnels.component';
import { PaymentComponent } from './ui-components/payment/payment.component';
import { ReactivatePausedAdComponent } from './ui-components/reactivate-paused-ad/reactivate-paused-ad.component';
import { SmsAfterPausedComponent } from './ui-components/sms-after-paused/sms-after-paused.component';
import { TransactionComponent } from './ui-components/transaction/transaction.component';


@NgModule({
  declarations: [
    AdStepOneComponent,
    // AddPostProfessionnelsComponent,
    AddPostTypeComponent,
    AnnonceCompleteComponent,
    AnnoncesComponent,
    ChangePassComponent,
    CheckoutComponent,
    DashboardComponent,
    // DeposerUneAnnonceComponent,
    FavorisComponent,
    InvoiceComponent,
    MessgaeComponent,
    MsgIdComponent,
    PartMesAnnoncParticulierComponent,
    PartMesAnnoncesComponent,
    PartMesAnnoncesProfessionnelsComponent,
    PaymentComponent,
    ReactivatePausedAdComponent,
    SmsAfterPausedComponent,
    TransactionComponent,
    // UserProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
   

 
  ],
  exports: [
    CommonModule,
    FormsModule,
 
 
  ],
})
export class UiSharedModule { }