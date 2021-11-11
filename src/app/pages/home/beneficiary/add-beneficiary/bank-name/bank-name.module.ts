import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BankNamePageRoutingModule } from './bank-name-routing.module';

import { BankNamePage } from './bank-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BankNamePageRoutingModule
  ],
  declarations: [BankNamePage]
})
export class BankNamePageModule {}
