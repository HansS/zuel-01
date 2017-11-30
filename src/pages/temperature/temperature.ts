import { OnInit } from "@angular/core";
import { SensorValue } from './../sensor/sensorvalue.interface';
import { Sensor } from '../sensor/sensor.interface';
import { WeekPlan } from '../weekplan/weekplan.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SensorService } from './../sensor/sensor.service';

@IonicPage()
@Component({
  selector: 'page-temperature',
  templateUrl: 'temperature.html',
})
export class TemperaturePage implements OnInit {

  sensor: Sensor;
  weekplan: WeekPlan;
  sensortype = 'temperature';
  sensorvalue: SensorValue;

  constructor(public navCtrl: NavController,

    public navParams: NavParams,

    private service: SensorService) { }

  ngOnInit() {
    this.loadSensorData();    
    //this.sensorvalue = this.sensor.sensorvalue;
  }
  loadSensorData(){
    this.sensor = this.service.getSensorData(this.sensortype);
    this.weekplan = this.sensor.weekplan;
    console.dir('temperature-oninit-sensor',this.sensor);
    console.dir('temperature-oninit-weekplan',this.weekplan);

  }
  addDayplan(){
    console.log('temperature-addDayplan');
    
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
    console.log('ionViewDidLoad temperaturePage');
    //this.loadSensorData();
  }

} // class
