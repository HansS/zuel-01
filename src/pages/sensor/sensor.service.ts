import { Sensor } from './sensor.interface';
import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Sensorplan } from './sensorplan.interface';
//import sensorplan from "./sensorplan.data";
import sensordata from "./sensor.data";

@Injectable()
export class SensorService {
  sensors: Sensor [];
  constructor() {
    console.log('Hello SensorService');
    
    this.sensors = sensordata;
    console.log('sensor.service-sensors:',this.sensors);
    
  }
  getSensorWeek(sensor: string): Sensor[] {
    let week = this.sensors.filter( s => s.name === sensor)
    return week;
  }


} // class
