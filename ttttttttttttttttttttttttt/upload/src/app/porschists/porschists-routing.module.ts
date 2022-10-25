import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonHeaderComponent, HeaderComponent, PaginationComponent, ProfileFooterComponent, ProfileHeaderComponent, SidebarComponent } from '../shared';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderSeparateComponent } from './header-separate/header-separate.component';

const routes: Routes = [
  {
    path:"ani",component:HeaderSeparateComponent
  },
  {
    path:"",redirectTo:"home",pathMatch:"full"
  },
  {
    path:"chc",component:CommonHeaderComponent
  },
  {
    path:"fc",component:FooterComponent
  },
  {
    path:"hc",component:HeaderComponent
  },
  {
    path:"pc",component:PaginationComponent
  },
  {
    path:"pfc",component:ProfileFooterComponent
  },
  {
    path:"phc",component:ProfileHeaderComponent
  },
  {
    path:"sc",component:SidebarComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PorschistsRoutingModule { }
