import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewRdPageRoutingModule } from './add-new-rd-routing.module';

import { AddNewRdPage } from './add-new-rd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewRdPageRoutingModule
  ],
  declarations: [AddNewRdPage]
})
export class AddNewRdPageModule {}
