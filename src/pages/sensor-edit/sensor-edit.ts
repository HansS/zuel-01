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
    //this.loadSensorData();
    this.sensor = new Sensor(1,'',new SensorType(this.sensortypename,this.displayname,'devicename','unit'),0,false,false,new WeekPlanType('weekly','wöchentlich'), this.sensortypename + ' wöchentlich', new WeekPlan(this.sensortypename + ' weekly', this.sensortypename + 'wöchentlich',this.sensortypename,this.sensortypename + ' wöchentlich', new Offset(30,true,'+','starttime'),[new DayPlan('Mo','08:00', '09:00', '08:00', '09:00')] ),false,new SensorValue('15.12.2017','0'),[]);
    this.initializeForm();
    this.dayplanFormArray = this.getDayplanFormArrayReference();
  }

  getDayplanFormArrayReference(): FormArray {
    let wp = this.sensorEditForm.controls.weekplan as FormGroup;
    let dpFormArray = wp.controls.dayplans as FormArray;
      
    console.log("Dayplan FormArray:", dpFormArray);

    return dpFormArray;
  }
  ionViewWillLoad() {
    console.log("ionViewDidLoad LightPage");
    this.sensortypename = this.navParams.get("sensortypename");
    console.log("sensortypename:", this.sensortypename);
  }

  loadSensorData() {
    //this.sensor = this.service.getSensorData(this.sensortypename);
    //this.weekplan = this.sensor.weekplan;

    console.log("light-weekplan", this.weekplan);
    console.dir("light-oninit-sensor", this.sensor);
    console.dir("light-oninit-weekplan", this.weekplan);
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

  ionViewDidLoad() {
    console.log("ionViewDidLoad LightPage");

    //this.sensortypename = this.navParams.get('sensortype');

    //this.loadSensorData();
  }
} // class
