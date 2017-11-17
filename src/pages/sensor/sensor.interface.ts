import { Offset } from './sensorday.interface';
import { SensorType } from './sensortype.interface';
import { SensorValue } from './sensorvalue.interface';
import { SensorPlan } from './sensorplan.interface';

export interface Sensor {
    id: number;
    uuid?: string;
    sensortype: SensorType;
    ison: boolean;
    sensorvalue?: SensorValue; // actual value  from sensor not logged
    isplan: boolean;
    sensorplan: SensorPlan[]
    islog: boolean
    sensorvalues: SensorValue[]

}