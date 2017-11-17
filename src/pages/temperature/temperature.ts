import { SensorValue } from './../sensor/sensorvalue.interface';
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
  sensorvalue: SensorValue;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private service: SensorService) {

    this.sensor = this.service.getSensorData(this.sensortype);
    //this.currentvalue = { datetime: '08.11.2017 17:00:00', sensorvalue: 20 };
    //this.sensorvalue = this.sensor.sensorvalue;

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
    console.log('ionViewDidLoad TemperaturePage');

  }
}

