import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BottomNavPageRoutingModule } from './bottom-nav-routing.module';

import { BottomNavPage } from './bottom-nav.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BottomNavPageRoutingModule
  ],
  declarations: [BottomNavPage]
})
export class BottomNavPageModule {

  

}
