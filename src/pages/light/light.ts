import { OnInit } from "@angular/core";
import { SensorValue } from './../sensor/sensorvalue.interface';
import { Sensor } from '../sensor/sensor.interface';
import { SensorPlan } from './../sensor/sensorplan.interface';
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
  sensorplan: SensorPlan;
  sensortype = 'light';
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
    this.sensorplan = this.sensor.sensorplan;
    console.dir('light-oninit-sensor',this.sensor);
    console.dir('light-oninit-sensorplan',this.sensorplan);

  }
  addDayplan(){
    console.log('light-addDayplan');
    
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
    //this.loadSensorData();
  }

} // class
