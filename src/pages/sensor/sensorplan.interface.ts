import { SensorDay } from './sensorday.interface';
export interface SensorPlan {
    planname?: string;
    sensortype: string;
    setvalue: number;  
    schedule?: string;
    days: SensorDay[];
}