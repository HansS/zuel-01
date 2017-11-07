import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SensorsPage } from './../sensors/sensors';

@IonicPage()
@Component({
  selector: 'page-device',
  templateUrl: 'device.html',
})
export class DevicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicePage');
  }
  addSensors(){
    this.navCtrl.push(SensorsPage);
  }
} // class
