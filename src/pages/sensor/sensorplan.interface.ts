import { SensorDay } from './sensorday.interface';
import { SensorType } from './sensortype.interface';
import { SensorOffset } from './sensoroffset.interface';
export interface SensorPlan {
    planname: string;
    sensortype: SensorType;
    setvalue: number;  
    offset: SensorOffset;                             //  Offset Type describes the offset values
    days: SensorDay[];
}