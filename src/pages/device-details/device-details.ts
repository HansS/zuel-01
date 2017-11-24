import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';

@IonicPage()
@Component({
  selector: 'page-device-details',
  templateUrl: 'device-details.html',
})
export class DeviceDetailsPage {

  peripheral: any = {};
  statusMessage: string;
  device: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private ble: BLE,
              private toastCtrl: ToastController,
              private ngZone: NgZone) {

    //let device = navParams.get('device');
    this.device = navParams.get('device');

    //this.setStatus('Connecting to ' + device.name || device.id);
    this.setStatus('Connecting to ' + JSON.stringify(this.device));

    this.ble.connect(this.device.id).subscribe(
      peripheral => this.onDeviceConnected(peripheral),
      peripheral => this.onDeviceDisconnected(peripheral)
    );

  }

  onDeviceConnected(peripheral) {
    this.ngZone.run(() => {
      this.setStatus('Device connected');
      this.peripheral = peripheral;
    });
  }

  onDeviceDisconnected(peripheral) {
    let toast = this.toastCtrl.create({
      message: 'The peripheral unexpectedly disconnected',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  // Disconnect peripheral when leaving the page
  ionViewWillLeave() {
    console.log('ionViewWillLeave disconnecting Bluetooth');
    this.ble.disconnect(this.peripheral.id).then(
      () => console.log('Disconnected ' + JSON.stringify(this.peripheral)),
      () => console.log('ERROR disconnecting ' + JSON.stringify(this.peripheral))
    )
  }

  setStatus(message) {
    console.log(message);
    this.ngZone.run(() => {
      this.statusMessage = message;
    });
  }

} // class
