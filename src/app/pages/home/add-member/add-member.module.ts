import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMemberPageRoutingModule } from './add-member-routing.module';

import { AddMemberPage } from './add-member.page';
import { HeaderComponent } from 'src/app/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMemberPageRoutingModule
  ],
  declarations: [AddMemberPage,
  HeaderComponent]
})
export class AddMemberPageModule {}
