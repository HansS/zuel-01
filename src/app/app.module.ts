import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BLE } from "@ionic-native/ble";

import { DeviceDetailsPageModule } from './../pages/device-details/device-details.module';
import { DevicePageModule } from './../pages/device/device.module';
import { SettingsPageModule } from './../pages/settings/settings.module';
import { IntroPageModule } from '../pages/intro/intro.module';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AppinfoPageModule } from '../pages/appinfo/appinfo.module';
import { SensorService } from '../pages/sensor/sensor.service';
import { NativeStorage } from '@ionic-native/native-storage';
import { DeviceListPageModule } from '../pages/device-list/device-list.module';
import { WeekplanEditPageModule } from '../pages/weekplan-edit/weekplan-edit.module';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DevicePageModule,
    DeviceListPageModule,
    DeviceDetailsPageModule,
    AppinfoPageModule,
    SettingsPageModule,
    IntroPageModule,
    WeekplanEditPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SensorService,
    NativeStorage,
    BLE
  ]
})
export class AppModule {}
