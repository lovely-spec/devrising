import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RdOpenSuccessfullyPageRoutingModule } from './rd-open-successfully-routing.module';

import { RdOpenSuccessfullyPage } from './rd-open-successfully.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RdOpenSuccessfullyPageRoutingModule
  ],
  declarations: [RdOpenSuccessfullyPage]
})
export class RdOpenSuccessfullyPageModule {}
