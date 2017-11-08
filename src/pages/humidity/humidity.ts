import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sensor } from '../sensor/sensor.interface';
import { SensorService } from '../sensor/sensor.service';
import { Sensorhistory } from '../sensor/sensorhistory.interface';

@IonicPage()
@Component({
  selector: 'page-humidity',
  templateUrl: 'humidity.html',
})
export class HumidityPage {

  sensor: Sensor;
  //sensor: Sensor;
  sensortype = 'humidity';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private service: SensorService) {

    this.sensor = this.service.getSensorData(this.sensortype);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HumidityPage');
  }

}
