import { SensorType } from "../sensor/sensortype.interface";
import { Component, OnInit } from "@angular/core";

import {
  FormGroup,
  FormControl,
  FormGroupName,
  FormArray,
  Validators
} from "@angular/forms";

import { IonicPage, NavController, NavParams, Nav } from "ionic-angular";

import { Sensor } from "../sensor/sensor.interface";
import { SensorValue } from "./../sensor/sensorvalue.interface";
import { SensorService } from "./../sensor/sensor.service";
import { WeekPlan } from "../weekplan/weekplan.interface";

@IonicPage()
@Component({
  selector: "page-sensor-edit",
  templateUrl: "sensor-edit.html"
})
export class SensorEditPage implements OnInit {
  // sensor
  sensorEditForm: FormGroup;
  sensor: Sensor;
  sensortypename: string;

  // sensor value
  sensorvalue: SensorValue; // current sensorvalue: { datetime, value }

  // sensortype
  sensortype: SensorType;

  // sensor weekplan FormGroup
  weekplan: WeekPlan;

  // sensor dayplan FormArray
  dayplanFormArray: FormArray;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private service: SensorService
  ) {}

  initializeForm() {
    this.sensorEditForm = new FormGroup({
      ison: new FormControl(),
      sensorsetvalue: new FormControl(),
      scheduletype: new FormControl(),
      isweekplan: new FormControl(),
      islog: new FormControl(),

      weekplan: new FormGroup({
        plandatetime: new FormControl(Date.now()),
        planname: new FormControl(),
        sensortypename: new FormControl(),
        setvalue: new FormControl(),

        offset: new FormGroup({
          minutes: new FormControl(),
          israndom: new FormControl(),
          offsettype: new FormControl(),
          settimetype: new FormControl()
        }), // weekplan offset FormGroup

        sensordays: new FormGroup({
          day: new FormControl(['Mo', Validators.required]),

          dayplans: new FormArray([
            new FormControl(['Mo', Validators.required]),
            new FormControl(["08:00", Validators.required])
          ]) // weekplan sensordays day dayplans FormArray
        }),

      }) // weekplan FormGroup
    }); // sensorEditForm;

  } // initializeForm

  ngOnInit() {
    this.loadSensorData();
    this.initializeForm();
    this.dayplanFormArray = this.getDayplanFormArrayReference();
  }

  getDayplanFormArrayReference(): FormArray {
    let wp = this.sensorEditForm.controls.weekplan as FormGroup;
    let dpFormArray = (wp.controls.sensordays as FormGroup).controls.dayplans as FormArray;
    console.log('Dayplan FormArray:', dpFormArray);
    
    return dpFormArray;
  }
  ionViewWillLoad() {
    console.log("ionViewDidLoad LightPage");

    this.sensortypename = this.navParams.get("sensortype");
    console.log("sensortypename:", this.sensortypename);

    //this.loadSensorData();
  }

  loadSensorData() {
    this.sensor = this.service.getSensorData(this.sensortypename);
    this.weekplan = this.sensor.weekplan;

    console.log("light-weekplan", this.weekplan);
    console.dir("light-oninit-sensor", this.sensor);
    console.dir("light-oninit-weekplan", this.weekplan);
  }
  addDayplan() {
    console.log("light-addDayplan");
  }
  onUpdateToggle(event) {
    console.log("checked:", event.checked);
    if (event.checked) {
      this.sensor.ison = true;
    } else {
      this.sensor.ison = false;
    }
  }

  saveWeekplan(f = this.sensorEditForm) {
    console.log('saveWeekplan:',f.value);
  }
  onAddStarttime() {
    const control = new FormControl(null, Validators.required);
    this.dayplanFormArray.push(control);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LightPage");

    //this.sensortypename = this.navParams.get('sensortype');

    //this.loadSensorData();
  }
} // class
