import { SensorDay } from '../sensor/sensorday.interface';
import { SensorType } from '../sensor/sensortype.interface';
import { SensorOffset } from '../sensor/sensoroffset.interface';

export interface WeekPlan {
    plandatetime:string;
    planname: string;
    sensortypename: string;
    setvalue: number;  
    offset: SensorOffset;                             //  Offset Type describes the offset values
    sensordays: SensorDay[];
}