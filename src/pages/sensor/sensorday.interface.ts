export interface SensorDay {
    sensortypename:string;                         // light, temperature, humidity
    day: string;                                    // mo  di mi do fr sa so
    dayplans: [
        {  // planed starttime
            setstarttime:  string;                         // 12:30
            setendtime: string;                             // 20:45
            // calculated starttime
            starttime:  string;                         // 12:30
            endtime: string;                             // 20:45
        }
    ]
}