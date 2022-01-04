import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavingCreditPageRoutingModule } from './saving-credit-routing.module';

import { SavingCreditPage } from './saving-credit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavingCreditPageRoutingModule
  ],
  declarations: [SavingCreditPage]
})
export class SavingCreditPageModule {}
