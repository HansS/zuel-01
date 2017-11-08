import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sensors',
  templateUrl: 'sensors.html'
})
export class SensorsPage {

  deviceRoot = 'DevicePage'
  lightRoot = 'LightPage'
  humidityRoot = 'HumidityPage'
  temperatureRoot = 'TemperaturePage'


  constructor(public navCtrl: NavController) {}


} // class
