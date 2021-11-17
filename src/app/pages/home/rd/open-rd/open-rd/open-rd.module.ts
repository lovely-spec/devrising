import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenRdPageRoutingModule } from './open-rd-routing.module';

import { OpenRdPage } from './open-rd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenRdPageRoutingModule
  ],
  declarations: [OpenRdPage]
})
export class OpenRdPageModule {}
