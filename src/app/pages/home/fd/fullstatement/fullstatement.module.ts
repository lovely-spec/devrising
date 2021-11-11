import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullstatementPageRoutingModule } from './fullstatement-routing.module';

import { FullstatementPage } from './fullstatement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullstatementPageRoutingModule
  ],
  declarations: [FullstatementPage]
})
export class FullstatementPageModule {}
