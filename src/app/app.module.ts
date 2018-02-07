import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SignUpPage } from '../pages/signup/signup';
import { LoginPage } from "../pages/login/login";
import {  WelcomePage} from "../pages/welcome/welcome";
import { CameraPage } from "../pages/camera/camera";
import { BarcodePage } from "../pages/barcode/barcode";



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NgxQRCodeModule } from "ngx-qrcode2";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SignUpPage,
    LoginPage,
    WelcomePage,
    CameraPage,
    BarcodePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SignUpPage,
    LoginPage,
    WelcomePage,
    CameraPage,
    BarcodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
