import { DeviceDetailsPageModule } from './../pages/device-details/device-details.module';
import { DevicePageModule } from './../pages/device/device.module';
import { SettingsPageModule } from './../pages/settings/settings.module';
import { ReceipeTabsPageModule } from './../pages/receipes/receipe-tabs/receipe-tabs.module';
import { ReceipesPageModule } from './../pages/receipes/receipes.module';
import { ReceipeListPageModule } from './../pages/receipes/receipe-list/receipe-list.module';
import { ReceipeEditPageModule } from './../pages/receipes/receipe-edit/receipe-edit.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BLE } from "@ionic-native/ble";

import { IntroPageModule } from '../pages/intro/intro.module';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ReceipeService } from '../pages/receipes/receipe.service';
import { ReceipeDetailsPageModule } from '../pages/receipes/receipe-details/receipe-details.module';
import { AppinfoPageModule } from '../pages/appinfo/appinfo.module';
import { LogPageModule } from '../pages/log/log.module';
import { SensorService } from '../pages/sensor/sensor.service';
import { NativeStorage } from '@ionic-native/native-storage';
import { DeviceListPageModule } from '../pages/device-list/device-list.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DevicePageModule,
    DeviceListPageModule,
    DeviceDetailsPageModule,
    AppinfoPageModule,
    LogPageModule,
    SettingsPageModule,
    IntroPageModule,
    ReceipesPageModule,
    ReceipeTabsPageModule,
    ReceipeDetailsPageModule,
    ReceipeEditPageModule,
    ReceipeListPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReceipeService,
    SensorService,
    NativeStorage,
    BLE
  ]
})
export class AppModule {}
