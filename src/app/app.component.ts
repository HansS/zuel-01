import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { TemperaturePage } from './../pages/temperature/temperature';
//import { DeviceListPage } from './../pages/device-list/device-list';
// import { IntroPage } from './../pages/intro/intro';
// import { LogPage } from '../pages/log/log';
// import { DevicePage } from '../pages/device/device';
// import { AppinfoPage } from './../pages/appinfo/appinfo';
// import { SettingsPage } from './../pages/settings/settings';
// import { SensorsPage } from './../pages/sensors/sensors';
// import { DeviceDetailsPage } from '../pages/device-details/device-details';
// import { SensorTabsPage } from '../pages/sensor-tabs/sensor-tabs';
// import { SwitchTabsPage } from '../pages/switch-tabs/switch-tabs';
// import { LightPage } from '../pages/light/light';
// import { HumidityPage } from '../pages/humidity/humidity';
// import { FanPage } from '../pages/fan/fan';
// import { CoolerPage } from '../pages/cooler/cooler';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

//  rootPage: any = HomePage;
  rootPage: any = 'IntroPage';

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Gerät verbinden', component: 'DeviceListPage' },
      { title: 'Beleuchtung', component: 'LightPage' },
      { title: 'Heizung', component: 'TemperaturePage' },
      { title: 'Kühlgerät', component: 'CoolerPage' },
      { title: 'Luftftbefeuchter', component: 'HumidityPage' },
      { title: 'Lufttrockner', component: 'FanPage' },
      { title: 'Messwerte', component: 'LogPage' },
      { title: 'Einstellungen', component: 'SettingsPage' },
      { title: 'Firma ZUEL', component: 'AppinfoPage' }
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
