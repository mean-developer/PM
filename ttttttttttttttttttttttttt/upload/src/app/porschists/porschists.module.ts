import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorschistsRoutingModule } from './porschists-routing.module';
import { HeaderSeparateComponent } from './header-separate/header-separate.component';


@NgModule({
  declarations: [
    HeaderSeparateComponent
  ],
  imports: [
    CommonModule,
    PorschistsRoutingModule
  ],
  exports:[HeaderSeparateComponent]
})
export class PorschistsModule { }
