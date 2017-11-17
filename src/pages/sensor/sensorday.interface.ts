import { SensorOffset } from "./sensoroffset.interface";



export interface SensorDay {
    day: string;                                    // mo  di mi do fr sa so
    fromtime:  string;                         // 12:30
    totime: string;                             // 20:45
    offset: SensorOffset;                             //  Offset Type describes the offset values
}