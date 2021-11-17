import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMinorPageRoutingModule } from './add-minor-routing.module';

import { AddMinorPage } from './add-minor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMinorPageRoutingModule
  ],
  declarations: [AddMinorPage]
})
export class AddMinorPageModule {}
