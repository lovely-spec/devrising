import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FdOpenSuccessfullyPageRoutingModule } from './fd-open-successfully-routing.module';

import { FdOpenSuccessfullyPage } from './fd-open-successfully.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FdOpenSuccessfullyPageRoutingModule
  ],
  declarations: [FdOpenSuccessfullyPage]
})
export class FdOpenSuccessfullyPageModule {}
