import { SensorOffset } from './sensoroffset.interface';
import { SensorType } from './sensortype.interface';
import { SensorValue } from './sensorvalue.interface';
import { WeekPlan } from '../weekplan-edit/weekplan.interface';

export interface Sensor {
    id: number;
    uuid?: string;
    sensortype: SensorType;
    ison: boolean;
    sensorvalue?: SensorValue; // actual value  from sensor not logged
    sensorsetvalue?: number;
    isplan: boolean;
    scheduletype: string; // daily or weekly
    weekplan: WeekPlan;
    islog: boolean
    sensorvalues: SensorValue[]

}