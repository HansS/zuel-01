import { SensorType, Sensor, SensorValue, WeekPlan, WeekPlanType, Offset, DayPlan } from './sensor.model';
import { Injectable, } from '@angular/core';
import { ModalController, AlertController } from 'ionic-angular';

import { NativeStorage } from "@ionic-native/native-storage";

//import sensordata from "./sensor.data";

@Injectable()
export class SensorService {

  sensors:  Sensor[] = [
    // Beleuchtung: Licht
    new Sensor(1,'0000A',
    new SensorType('light','Beleuchtung','Beleuchtung','Watt'),0,false,false,
    new WeekPlanType('weekly','wöchentlich'),
    'Beleuchtung wöchentlich',
    new WeekPlan('weekly','wöchentlich','light','Beleuchtung wöchentlich',
    new Offset(30,true,'+','starttime'),
    [new DayPlan('Mo','08:00','09:00','08:00','09:00')]),
    false, new SensorValue('11.11.2017','0'),
    []),
    // Heizung: Temperatur
    new Sensor(2,'0000B',
    new SensorType('temperature','Heizung','Heizung','Celsius'),20,false,false,
    new WeekPlanType('weekly','wöchentlich'),
    'Heizung wöchentlich',
    new WeekPlan('weekly','wöchentlich','light','Beleuchtung wöchentlich',
    new Offset(30,true,'+','starttime'),
    [new DayPlan('Mo','08:00','09:00','08:00','09:00')]),
    false, new SensorValue('11.11.2017','0'),
    []),

    // 3 - Kühgerät: Temperatur
    new Sensor(3,'0000C',
    new SensorType('termperature','Kühgerät','Kühgerät','Celsius'),0,false,false,
    new WeekPlanType('weekly','wöchentlich'),
    'Kühgerät wöchentlich',
    new WeekPlan('weekly','wöchentlich','light','Beleuchtung wöchentlich',
    new Offset(30,true,'+','starttime'),
    [new DayPlan('Mo','08:00','09:00','08:00','09:00')]),
    false, new SensorValue('11.11.2017','0'),
    []),

    // 4 Luftbefeuchter: Feuchtigkeit

    new Sensor(4,'0000D',
    new SensorType('humidity','Luftbefeuchter','Luftbefeuchter','%RH'),0,false,false,
    new WeekPlanType('weekly','wöchentlich'),
    'Luftbefeuchter wöchentlich',
    new WeekPlan('weekly','wöchentlich','light','Beleuchtung wöchentlich',
    new Offset(30,true,'+','starttime'),
    [new DayPlan('Mo','08:00','09:00','08:00','09:00')]),
    false, new SensorValue('11.11.2017','0'),
    []),
    // 5 Lufttrockner: Feuchtigkeit
    new Sensor(5,'0000E',
    new SensorType('humidity','Lufttrockner','Lufttrockner','%RH'),0,false,false,
    new WeekPlanType('weekly','wöchentlich'),
    'Lufttrockner wöchentlich',
    new WeekPlan('weekly','wöchentlich','light','Beleuchtung wöchentlich',
    new Offset(30,true,'+','starttime'),
    [new DayPlan('Mo','08:00','09:00','08:00','09:00')]),
    false, new SensorValue('11.11.2017','0'),
    [])
  ]
  //sensorhistory: Sensorhistory[];

  constructor(private storage: NativeStorage,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController) {
  }

  getSensors(typename: string): Sensor {
    return this.sensors.find( (sensor:Sensor) => sensor.sensortype.typename === typename );
  }

} // class



