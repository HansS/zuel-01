import { SensorDay } from '../sensor/sensorday.interface';
import { SensorType } from '../sensor/sensortype.interface';
import { SensorOffset } from '../sensor/sensoroffset.interface';

export interface WeekPlanType {
    name: string;
    displayname: string;
}
export interface WeekPlan {
    weekplantype: WeekPlanType; // {typename: 'daily', displayname: 'tàglich'}, {weekly, wöchentlich}
    sensortypename: string;
    plandatetime?:Date;
    planname: string;
    setvalue: number;  
    offset: SensorOffset;                             //  Offset Type describes the offset values
    sensordays: SensorDay[];
}