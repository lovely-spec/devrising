import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewMemberPageRoutingModule } from './add-new-member-routing.module';

import { AddNewMemberPage } from './add-new-member.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewMemberPageRoutingModule
  ],
  declarations: [AddNewMemberPage]
})
export class AddNewMemberPageModule {}
