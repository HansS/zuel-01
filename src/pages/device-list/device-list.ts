import { DeviceDetailsPage } from './../device-details/device-details';
import { Component, NgZone, } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';

@Component({
  selector: 'page-device-list',
  templateUrl: 'device-list.html'
})
export class DeviceListPage {

  devices: any[] = [];
  isBluetooth = false;
  statusMessage: string;

  constructor(public navCtrl: NavController,
    private toastCtrl: ToastController,
    private ble: BLE,
    private ngZone: NgZone) {

  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    setTimeout(this.checkForBluetooth.bind(this), 1000);
    this.scan();
  }

  checkBluetoothAvailable() {
    setTimeout(this.checkForBluetooth.bind(this), 5000);

  }
  checkForBluetooth() {
    this.ble.isEnabled()
      .then(data => {
        this.isBluetooth = true;
        console.log('Bluetooth enabled', data)
      })
      .catch(error => {
        this.isBluetooth = false;
        console.log('Bluetooth not enabled', error)
      });
  }
  scan() {
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

  // If location permission is denied, you'll end up here
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

  deviceSelected(device) {
    console.log(JSON.stringify(device) + ' selected');
    this.navCtrl.push(DeviceDetailsPage, {
      device: device
    });

  }
} // class