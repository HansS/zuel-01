import { Injectable, } from '@angular/core';
import { ModalController, AlertController } from 'ionic-angular';

import { NativeStorage } from "@ionic-native/native-storage";

import { Sensor } from './sensor.interface';
import sensordata from "./sensor.data";

@Injectable()
export class SensorService {

  sensors: any;
  //sensorhistory: Sensorhistory[];

  constructor(private storage: NativeStorage,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController) {

    this.sensors = sensordata;
    console.dir(sensordata);

  }
  getSensorData(type: string): Sensor {
    let data = this.sensors.filter(s => s.sensortype.name === type);
    console.dir(data[0]);
    
    return data[0];
  }

  getRandomNumberFrom( minutes: number){
  }
} // class



