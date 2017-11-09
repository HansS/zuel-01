import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sensor } from '../sensor/sensor.interface';
import { SensorService } from '../sensor/sensor.service';
import { Sensorhistory } from '../sensor/sensorhistory.interface';

@IonicPage()
@Component({
  selector: 'page-humidity',
  templateUrl: 'humidity.html',
})
export class HumidityPage implements OnInit {

  sensor: Sensor;
  //sensor: Sensor;
  sensortype = 'humidity';
  currentvalue: Sensorhistory;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private service: SensorService) {

    //this.sensor = this.service.getSensorData(this.sensortype);
    //this.currentvalue =  {datetime: '08.11.2017 17:00:00', sensorvalue: 35};

  }
  ngOnInit() {
    this.sensor = this.service.getSensorData(this.sensortype);
    //this.currentvalue = { datetime: '08.11.2017 17:00:00', sensorvalue: 20 };
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
    console.log('ionViewDidLoad HumidityPage');
  }
}

