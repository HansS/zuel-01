import { Sensor, WeekPlan, DayPlan } from './../sensor/sensor.model';
import {
  FormBuilder,
  FormArray,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import days from "./days.data";

import { SensorService } from "../sensor/sensor.service";


@IonicPage()
@Component({
  selector: "page-weekplan",
  templateUrl: "weekplan.html"
})
export class WeekplanPage implements OnInit {
  // sensor
sensor: Sensor;

// paramValues:  sensortypename, displayname
sensortypename: string;
displayname: string;

  // weekplan with sensordays : 'Mo', 'Di', ... 'So'
  weekplan: WeekPlan;
  

  // Day
  // days : import from days.data.ts
  
  dayplans: DayPlan[];
  dayplansFormArray: FormArray;

  // weekplan form
  weekplanForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    private fb: FormBuilder,
    public navParams: NavParams,
    public service: SensorService
  ) {}

  ngOnInit() {
   // this.sensor = this.service.getSensors(this.sensortypename);

    this.initializeForm();
  }

  initializeForm() {
    this.weekplanForm = this.fb.group({
      plandatetime: [""],
      planname: [""],
      sensortypename: [""],
      setvalue: [""],
      offset: this.fb.group({
        minutes: [""], // how many minutes to offset
        israndom: [""], // fixed starttime and endtime or random starttime and endtime
        offsettype: [""], // +1 : + minutes , -1: - minutes from settimetype
        settimetype: [""] // 'starttime' or 'endtime'
      }),
      dayplans: this.fb.array([this.createDayplan()])
    }); // weekplan Form

    console.log("weekplan-weekplanForm", this.weekplanForm);
    this.setDayplanFormGroupReference();
  } // initializeForm

  ionViewWillEnter() {
    this.sensortypename = this.navParams.get("sensortypename");
    this.displayname = this.navParams.get("displayname");
  }

  setDayplanFormGroupReference() {
    //let sensordayGroup = this.weekplanForm.controls.sensorday as FormGroup;
    this.dayplansFormArray = this.weekplanForm.controls.dayplans as FormArray;

    console.log("dayplansFormArray:", this.dayplansFormArray);
  }

  createDayplan() {
    return this.fb.group({
      // user selected starttime and endtime
      day: ["", Validators.required],
      setstarttime: ["", Validators.required],
      setendtime: ["", Validators.required]
    });
  }

  addDayplan() {
    this.dayplansFormArray.push(this.createDayplan());
  }

  createOffset(): FormGroup {
    return this.fb.group({
      minutes: [""], // how many minutes to offset
      israndom: [""], // fixed starttime and endtime or random starttime and endtime
      offsettype: [""], // +1 : + minutes , -1: - minutes from settimetype
      settimetype: [""] // 'starttime' or 'endtime'
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad weekplanEditPage");
    console.log("weekplan-edit: weekplan:", this.weekplan);
  }
  savePlantime() {
    console.log("weekplan-edit:savePlantime");
  }
  addPlantime() {
    console.log("weekplan-edit:addPlantime");
  }
} // class
