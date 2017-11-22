import { SensorOffset } from "./sensoroffset.interface";



export interface SensorDay {
    sensortype?:string;                         // light, temperature, humidity
    day: string;                                    // mo  di mi do fr sa so
    dayplans: [
        {
            setstarttime:  string;                         // 12:30
            setendtime: string;                             // 20:45
            calcstarttime:  string;                         // 12:30
            calcendtime: string;                             // 20:45
        }
    ]
}