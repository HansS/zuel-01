import { SensorDay } from '../sensor/sensorday.interface';
import { SensorType } from '../sensor/sensortype.interface';
import { SensorOffset } from '../sensor/sensoroffset.interface';

export interface WeekPlanType {
    name: string;
    displayname: string;
}
export interface WeekPlan {
    weekplantype: WeekPlanType; // {daily, tàglich}, {weekly, wöchentlich}
    sensortypename: string;
    plandatetime:string;
    planname: string;
    setvalue: number;  
    offset: SensorOffset;                             //  Offset Type describes the offset values
    sensordays: SensorDay[];
}