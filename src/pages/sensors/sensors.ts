import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sensors',
  templateUrl: 'sensors.html'
})
export class SensorsPage {

  lightRoot = 'LightPage'
  humidityRoot = 'HumidityPage'
  temperatureRoot = 'TemperaturePage'


  constructor(public navCtrl: NavController) {}

}
