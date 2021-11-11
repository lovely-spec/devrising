import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewFdPageRoutingModule } from './add-new-fd-routing.module';

import { AddNewFdPage } from './add-new-fd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewFdPageRoutingModule
  ],
  declarations: [AddNewFdPage]
})
export class AddNewFdPageModule {}
