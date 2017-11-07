import { Sensor } from '../sensor/sensor.interface';
import { Sensorplan } from './../sensor/sensorplan.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SensorService } from './../sensor/sensor.service';

@IonicPage()
@Component({
  selector: 'page-light',
  templateUrl: 'light.html',
})
export class LightPage {

  sensordata: Sensor[];
  sensor: Sensor;

  sensorname = 'light';
  sensordisplayname = 'Beleuchtung';

  constructor(public navCtrl: NavController, 
                      public navParams: NavParams,
                      private service: SensorService) {
    this.sensordata = this.service.getSensorWeek(this.sensorname);
    this.sensor = this.sensordata[0];
    console.log('light.constructor-sensorweek',this.sensordata);
    console.log('light.constructor-sensor',this.sensor);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LightPage');
  }

}
