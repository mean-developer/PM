import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostProfessionnelsComponent, AddPostTypeComponent, AnnonceCompleteComponent, AnnoncesComponent, CheckoutComponent, DashboardComponent, DeposerUneAnnonceComponent, FavorisComponent, InvoiceComponent, MessgaeComponent, MsgIdComponent, PartMesAnnoncesComponent, PartMesAnnoncParticulierComponent, PaymentComponent, ReactivatePausedAdComponent, SmsAfterPausedComponent, TransactionComponent, UserProfileComponent  } from 'src/app/components';

import { ChangePassComponent } from 'src/app/components/change-pass/change-pass.component';

//import { AdStepOneComponent } from 'src/app/components/ad-step-one/ad-step-one.component';
import { PartMesAnnoncesProfessionnelsComponent } from 'src/app/components/part-mes-annonces-professionnels/part-mes-annonces-professionnels.component';
import { FullLayoutComponent } from './full-layout.component';
const routes: Routes = [
  // {
  //   path: 'deposer-une-annonce',
  //   component: DeposerUneAnnonceComponent
  // },
  {
    path: '',
    component: FullLayoutComponent,
    data: { title: 'pages' },
    children: [
      //ad-step-one
      {
        path: 'add-post-professionnels',
        component: AddPostProfessionnelsComponent
      },
      {
        path: 'add-post-type',
        component: AddPostTypeComponent
      },
      {
        path: 'annonce-complete',
        component: AnnonceCompleteComponent
      },
      {
        path: 'annonces',
        component: AnnoncesComponent
      },
      {
        path: 'change-pass',
        component: ChangePassComponent
      },
      {
        path: 'checkout',
        component: CheckoutComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'deposer-une-annonce',
        component: DeposerUneAnnonceComponent
      },
      {
        path: 'favoris',
        component: FavorisComponent
      },
      {
        path: 'invoice',
        component: InvoiceComponent
      },
      {
        path: 'messgae',
        component: MessgaeComponent
      },
      {
        path: 'msg-id',
        component: MsgIdComponent
      },
      
      {
        path: 'part-mes-annonc-particulier',
        component: PartMesAnnoncParticulierComponent
      },
      {
        path: 'part-mes-annonces',
        component: PartMesAnnoncesComponent
      },
      {
        path: 'part-mes-annonces-professionnels',
        component: PartMesAnnoncesProfessionnelsComponent
      },
      {
        path: 'payment',
        component: PaymentComponent
      },
      {
        path: 'reactivate-paused-ad',
        component: ReactivatePausedAdComponent
      },
      {
        path: 'sms-after-paused',
        component: SmsAfterPausedComponent
      },
      {
        path: 'transaction',
        component: TransactionComponent
      },
      {
        path: 'user-profile',
        component: UserProfileComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullRoutingModule {}
