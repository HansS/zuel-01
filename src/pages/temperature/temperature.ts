import { Sensorhistory } from './../sensor/sensorhistory.interface';
import { Sensor } from './../sensor/sensor.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SensorService } from '../sensor/sensor.service';

@IonicPage()
@Component({
  selector: 'page-temperature',
  templateUrl: 'temperature.html',
})
export class TemperaturePage {
  sensor: Sensor;
  sensortype = 'temperature';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private service: SensorService) {

    this.sensor = this.service.getSensorData(this.sensortype);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemperaturePage');
  }

}
