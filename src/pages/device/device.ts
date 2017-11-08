import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SensorsPage } from './../sensors/sensors';
import { Device } from './device.interface';

@IonicPage()
@Component({
  selector: 'page-device',
  templateUrl: 'device.html',
})
export class DevicePage {

  device: Device;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.device = { uuid: '', 
                            devicetype: 'multiswitch', 
                            devicename: 'ZUEL Multiswitch', 
                            owneremail: '',
                            buydate: Date.now().toString(), 
                            isconnected: false}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicePage');
  }
  addSensors(){
    this.navCtrl.push(SensorsPage);
  }
} // class
