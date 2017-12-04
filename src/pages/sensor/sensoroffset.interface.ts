export interface SensorOffset {
    minutes: number;                              // how many minutes to offset
    israndom: boolean;                         // fixed starttime and endtime or random starttime and endtime
    offsettype: number;                         // +1 : + minutes , -1: - minutes from settimetype 
    settimetype: string;                                 // 'starttime' or 'endtime' 
}