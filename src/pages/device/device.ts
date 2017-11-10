import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
//import { BLE } from "@ionic-native/ble";

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
    //private ble: BLE,
    private ngZone: NgZone) {
      this.device = { uuid: '', devicename: 'ZUEL-Multiswitch', devicetype:'sensor', buydate: '', isconnected: false}
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicePage');
    this.device = { uuid: '', devicename: 'ZUEL-Multiswitch', devicetype:'sensor', buydate: '', isconnected: false}
    //this.scan()
  }
  addSensors() {
    this.navCtrl.push(SensorsPage);
  }

/*   scan() {
    this.setStatus('Scanning for Bluetooth LE Devices');
    this.devices = [];  // clear list
    this.ble.scan([], 5).subscribe(
      device => this.onDeviceDiscovered(device),
      error => this.scanError(error)
    );

    setTimeout(this.setStatus.bind(this), 5000, 'Scan complete');
  }

  onDeviceDiscovered(device) {
    console.log('Discovered ' + JSON.stringify(device, null, 2));
    this.ngZone.run(() => {
      this.devices.push(device);
    });
 
}

  
  scanError(error) {
    this.setStatus('Error ' + error);
    let toast = this.toastCtrl.create({
      message: 'Error scanning for Bluetooth low energy devices',
      position: 'middle',
      duration: 5000
    });
    toast.present();
  }

  setStatus(message) {
    console.log(message);
    this.ngZone.run(() => {
      this.statusMessage = message;
    });
  }
*/  
} // class
