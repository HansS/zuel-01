import { SensorOffset } from './sensoroffset.interface';
import { SensorType } from './sensortype.interface';
import { SensorValue } from './sensorvalue.interface';
import { SensorPlan } from './sensorplan.interface';

export interface Sensor {
    id: number;
    uuid?: string;
    sensortype: SensorType;
    ison: boolean;
    sensorvalue?: SensorValue; // actual value  from sensor not logged
    sensorsetvalue?: number;
    isplan: boolean;
    scheduletype: string; // daily or weekly
    sensorplan: SensorPlan;
    islog: boolean
    sensorvalues: SensorValue[]

}