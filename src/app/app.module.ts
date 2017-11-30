import { NavigationPageModule } from '../pages/navigation/navigation.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NativeStorage } from '@ionic-native/native-storage';
import { BLE } from "@ionic-native/ble";

// device
import { DeviceListPageModule } from '../pages/device-list/device-list.module';
import { DeviceDetailsPageModule } from './../pages/device-details/device-details.module';

// sensors: service, light, humidity, temperature, fan
import { SensorService } from '../pages/sensor/sensor.service';
import { LightPageModule } from '../pages/light/light.module';
import { HumidityPageModule } from '../pages/humidity/humidity.module';
import { TemperaturePageModule } from './../pages/temperature/temperature.module';
import { FanPageModule } from '../pages/fan/fan.module';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPageModule } from '../pages/intro/intro.module';
import { LogPageModule } from '../pages/log/log.module';
import { AppinfoPageModule } from '../pages/appinfo/appinfo.module';
import { SettingsPageModule } from './../pages/settings/settings.module';
import { CoolerPageModule } from '../pages/cooler/cooler.module';
import { SensorEditPageModule } from '../pages/sensor-edit/sensor-edit.module';
import { WeekplanPageModule } from '../pages/weekplan/weekplan.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NavigationPageModule,
    SensorEditPageModule,
    WeekplanPageModule,
    DeviceListPageModule,
    DeviceDetailsPageModule,
    AppinfoPageModule,
    SettingsPageModule,
    IntroPageModule,
    LogPageModule,
    LightPageModule,
    TemperaturePageModule,
    HumidityPageModule,
    FanPageModule,
    CoolerPageModule,
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
