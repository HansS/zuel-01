import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';

import { SensorsPage } from './../sensors/sensors';
import { Device } from './device.interface';
import { Sensor } from '../sensor/sensor.interface';

@IonicPage()
@Component({
  selector: 'page-device',
  templateUrl: 'device.html',
})
export class DevicePage {

  devices: any[] = [];
  statusMessage: string;
  device: Device;
  sensor: Sensor;
  sensors: Sensor[];

  constructor(public navCtrl: NavController,
    private toastCtrl: ToastController,
    private ngZone: NgZone) {
      this.device = { uuid: '', devicename: 'Multiswitch', devicetype:'sensor', buydate: '', isconnected: false}
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicePage');
    this.device = { uuid: '', devicename: 'ZUEL-Multiswitch', devicetype:'sensor', buydate: '', isconnected: false}
    //this.scan()
  }
  addSensors() {
    this.navCtrl.push(SensorsPage);
  }

} // class
