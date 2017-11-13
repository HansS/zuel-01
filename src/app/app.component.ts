import { DeviceListPage } from './../pages/device-list/device-list';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { IntroPage } from './../pages/intro/intro';
import { ReceipesPage } from '../pages/receipes/receipes';
import { ReceipeTabsPage } from '../pages/receipes/receipe-tabs/receipe-tabs';
import { LogPage } from '../pages/log/log';
import { DevicePage } from '../pages/device/device';
import { AppinfoPage } from './../pages/appinfo/appinfo';
import { SettingsPage } from './../pages/settings/settings';
import { SensorsPage } from './../pages/sensors/sensors';
import { DeviceDetailsPage } from '../pages/device-details/device-details';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

//  rootPage: any = HomePage;
  rootPage: any = IntroPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'MultiSwitch', component: HomePage },
      { title: 'Gerät verbinden', component: DeviceListPage },
      { title: 'Gerät verbinden - alt', component: DevicePage },
      { title: 'Gerät einstellen', component: DeviceDetailsPage },
      { title: 'Gerät einstellen - alt', component: SensorsPage },
      { title: 'Messwerte aufzeichnen - ist evtl nicht nötig', component: LogPage },
      { title: 'App Einstellungen', component: SettingsPage },
      { title: 'App Info', component: AppinfoPage },
      { title: 'Intro', component: IntroPage }
      //{ title: 'Receipes', component: ReceipesPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
