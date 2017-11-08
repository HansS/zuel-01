import { Injectable, } from '@angular/core';
import { ModalController, AlertController } from 'ionic-angular';

import { NativeStorage } from "@ionic-native/native-storage";

import { Sensor } from './sensor.interface';
import sensordata from "./sensor.data";

@Injectable()
export class SensorService {

  sensors: Sensor[];
  //sensorhistory: Sensorhistory[];

  constructor(private storage: NativeStorage,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController) {

    this.sensors = sensordata;

  }
  getSensorData(type: string): Sensor {
    let data = this.sensors.filter(s => s.sensortype === type);
    return data[0];
  }

} // class



