import { SensorOffset } from './sensoroffset.interface';
import { SensorType } from './sensortype.interface';
import { SensorValue } from './sensorvalue.interface';
import { WeekPlan } from '../weekplan/weekplan.interface';

export interface Sensor {
    id: number;
    uuid?: string;
    sensortypename: string;
    sensortype: SensorType;
    sensorsetvalue: number;  // set value for the sensor
    ison: boolean;
    sensorvalue?: SensorValue; // actual value  from sensor not logged
    isweekplan: boolean;
    scheduletype: string;
    scheduletypedisplay: string;
    weekplanname: string;
    weekplan: WeekPlan;
    islog: boolean
    logvalues: SensorValue[]

}