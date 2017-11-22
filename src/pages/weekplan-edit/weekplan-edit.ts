import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SensorService } from '../sensor/sensor.service';
import { SensorDay } from '../sensor/sensorday.interface';
import { WeekPlan } from './weekplan.interface';


@IonicPage()
@Component({
  selector: 'page-weekplan-edit',
  templateUrl: 'weekplan-edit.html',
})
export class WeekplanEditPage implements OnInit {

  sensorId: number;
  weekplan: WeekPlan;
  sensordays: SensorDay[];
  displayname = "Beleuchtung";
  // form
  dayplanForm: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public service: SensorService) {
  }

  ngOnInit() {
    this.sensorId = this.navParams.get('sensorid');
    this.weekplan = this.service.getSensorData('light').weekplan;
    this.sensordays = this.weekplan.days;
  }
  ionViewDidLoad() {

    console.log('ionViewDidLoad weekplanEditPage');
    console.log('weekplan-edit: weekplan:', this.weekplan);
    console.log('weekplan-edit: sensordays:', this.sensordays);

  }
  savePlantime() {
    console.log('weekplan-edit:savePlantime');

  }
  addPlantime() {
    console.log('weekplan-edit:addPlantime');
  }
  initializeForm(){
    this.dayplanForm = new FormGroup({
      'setstarttime': new FormControl(null, Validators.required),
      'setendtime': new FormControl(null, Validators.required)

    });
  }
} // class
