import { OnInit } from "@angular/core";
import { Sensorhistory } from './../sensor/sensorhistory.interface';
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
export class LightPage implements OnInit {

  sensor: Sensor;
  sensortype = 'light';
  currentvalue: Sensorhistory;

  constructor(public navCtrl: NavController,

    public navParams: NavParams,

    private service: SensorService) { }

  ngOnInit() {
    this.sensor = this.service.getSensorData(this.sensortype);
    this.currentvalue = this.sensor.history[0];
  }
  onUpdateToggle(event) {
    console.log('checked:', event.checked);
    if (event.checked) {
      this.sensor.ison = true;
    } else {
      this.sensor.ison = false;
    }

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LightPage');
  }

} // class
