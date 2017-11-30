import { SensorType } from '../sensor/sensortype.interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

import { Sensor } from '../sensor/sensor.interface';
import { SensorValue } from './../sensor/sensorvalue.interface';
import { SensorService } from './../sensor/sensor.service';
import { WeekPlan } from '../weekplan/weekplan.interface';

@IonicPage()
@Component({
  selector: 'page-sensor-edit',
  templateUrl: 'sensor-edit.html',
})
export class SensorEditPage implements OnInit {

  // sensor
  sensorForm: FormGroup;
  sensor: Sensor;
  sensortypename: string;

  // sensor value
  sensorvalue: SensorValue; // current sensorvalue: { datetime, value }
  
  // sensortype
  sensortype: SensorType;

// sensor weekplan
  weekplan: WeekPlan;
  
  constructor(public navCtrl: NavController,
    private navParams: NavParams,
    private service: SensorService) {

  }

  initializeForm(){
    this.sensorForm = new FormGroup({
      'ison': new FormControl(),
      'sensorsetvalue': new FormControl(),
      'isweekplan': new FormControl(),
      'islog': new FormControl(),
      'weekplan': new FormGroup({
        'scheduletype': new FormControl(),
      }),
    });
  }
  ngOnInit() {
    this.loadSensorData();
    //this.sensorvalue = this.sensor.sensorvalue;
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad LightPage');

    this.sensortypename = this.navParams.get('sensortype');
    console.log('sensortypename:',this.sensortypename);
    
    //this.loadSensorData();
  }

  loadSensorData() {
    this.sensor = this.service.getSensorData(this.sensortypename);
    this.weekplan = this.sensor.weekplan;

    console.log('light-weekplan', this.weekplan);
    console.dir('light-oninit-sensor', this.sensor);
    console.dir('light-oninit-weekplan', this.weekplan);

  }
  addDayplan() {
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

  saveWeekplan(f: FormGroup) {
    console.log(f.value);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LightPage');

    //this.sensortypename = this.navParams.get('sensortype');
    
    
    
    //this.loadSensorData();
  }


} // class
