export interface SensorOffset {
    minutes: number;                              // how many minutes to offset
    israndom: boolean;                         // fixed starttime and endtime or random starttime and endtime
    offsettype: number;                         // +1 : plus offset minutes , -1: minus offset minutes
    settype: string;                                 // starttime or endtime +/- 
}