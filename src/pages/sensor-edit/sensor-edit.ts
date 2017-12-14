import { Sensor, SensorType,SensorValue, WeekPlanType, WeekPlan, Offset, DayPlan } from "./../sensor/sensor.model";
import { Component, OnInit } from "@angular/core";

import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormGroupName,
  FormArray,
  Validators
} from "@angular/forms";

import { IonicPage, NavController, NavParams, Nav } from "ionic-angular";

import { SensorService } from "./../sensor/sensor.service";

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
displayname: string;
  // sensor value
  sensorvalue: SensorValue; // current sensorvalue: { datetime, value }

  // sensortype
  sensortype: SensorType;

  // sensor weekplan FormGroup
  weekplan: WeekPlan;

  // dayplans
  dayplans: DayPlan[] = [new DayPlan("Mo", "08:00", "09:00", "08:00", "09:00")];
  dayplanFormArray: FormArray;

  constructor(
    public navCtrl: NavController,
    private fb: FormBuilder,
    private navParams: NavParams,
    private service: SensorService
  ) {}

  initializeForm() {
    this.sensorEditForm = new FormGroup({
      ison: new FormControl(),
      isturnon: new FormControl(),
      sensorsetvalue: new FormControl(),
      sensorvalue: new FormGroup({
        datetime: new FormControl(),
        value: new FormControl()
      }),
      scheduletype: new FormControl(['weekly']),
      isweekplan: new FormControl(['true']),
      islog: new FormControl(),

      weekplan: new FormGroup({
        plandatetime: new FormControl(['15.12.2017']),
        planname: new FormControl('Zeitplan name eingeben'),
        sensortypename: new FormControl([`${this.sensortypename}`]),
        setvalue: new FormControl(['20']),

        offset: new FormGroup({
          minutes: new FormControl(),
          israndom: new FormControl(),
          offsettype: new FormControl(),
          settimetype: new FormControl()
        }), // weekplan offset FormGroup

        dayplans: this.fb.array([this.createDayplan()])
      }) // weekplan FormGroup
    }); // sensorEditForm;
  } // initializeForm

  createDayplan(): FormGroup {
    return this.fb.group({
      day: ['Mo', Validators.required],
      setstarttime: ["08:00:00", Validators.required],
      setendtime: ["09:00:00", Validators.required]
    });
  }

  addDayplan() {
    this.dayplanFormArray.push(this.createDayplan());
  }
  
  ngOnInit() {
    this.initializeForm();
    this.dayplanFormArray = this.getDayplanFormArrayReference();
    this.sensor = this.service.createSensor(this.sensortypename);
  }

  getDayplanFormArrayReference(): FormArray {
    let wp = this.sensorEditForm.controls.weekplan as FormGroup;
    let dpFormArray = wp.controls.dayplans as FormArray;
      
    console.log("Dayplan FormArray:", dpFormArray);

    return dpFormArray;
  }
  ionViewWillLoad() {
    this.sensortypename = this.navParams.get("sensortypename");
    console.log("ionViewDidLoad LightPage");
    
    console.log("sensortypename:", this.sensortypename);
  }
  ionViewWillEnter(){
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
    console.log("saveWeekplan:", f.value);
  }
  onAddStarttime() {
    const control = new FormControl(null, Validators.required);
    this.dayplanFormArray.push(control);
  }


} // class
