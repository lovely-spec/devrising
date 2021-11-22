import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, NavParams } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { CreatePdf } from 'src/providers/CreatePdf';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IonicStorageModule } from '@ionic/storage';
import { Network } from '@ionic-native/network/ngx';

import { NativeStorage } from '@ionic-native/native-storage/ngx';


import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import {HTTP} from "@ionic-native/http/ngx";
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { CommonModule } from '@angular/common';
import { AddBeneficiaryPage } from './pages/home/beneficiary/add-beneficiary/add-beneficiary.page';
import { Camera } from '@ionic-native/camera/ngx';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule,HttpClientModule, FormsModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AppComponent,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: ErrorHandler},
    ApihelperProvider,
    Network,
    NativeStorage,
    File,
    FileOpener,
    FingerprintAIO,
    WebView,
    FilePath,
    Crop,
    AndroidPermissions,
    HTTP,
    NavParams,
    CreatePdf,
    Keyboard,
    Storage,
    SMS,
    CommonModule,
    BrowserModule,
    AddBeneficiaryPage ,
    Camera
    
  ]
})
export class AppModule {}