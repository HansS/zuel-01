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
import { SensorDay } from "../sensor/sensorday.interface";
import { WeekPlan } from "./weekplan.interface";
import { DayPlan } from "./dayplan.interface";

@IonicPage()
@Component({
  selector: "page-weekplan",
  templateUrl: "weekplan.html"
})
export class WeekplanPage implements OnInit {
  sensorId: number;
  sensortypename: string;
  // weekplan with sensordays : 'Mo', 'Di', ... 'So'
  weekplan: WeekPlan;
  sensordays: SensorDay[];

  // Day
  // days : import from days.data.ts
  sensorday: SensorDay;
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
    this.weekplan = this.service.getSensorData("light").weekplan;
    this.sensordays = this.weekplan.sensordays;
    console.log("sensordays: ", this.sensordays);

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
    console.log("weekplan-edit: sensordays:", this.sensordays);
  }
  savePlantime() {
    console.log("weekplan-edit:savePlantime");
  }
  addPlantime() {
    console.log("weekplan-edit:addPlantime");
  }
} // class
