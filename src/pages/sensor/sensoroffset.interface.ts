export interface SensorOffset {
    minutes: number;                              // how many minutes to offset
    type: string;                                       // begin: fromtime -/+ minutes or end: totime +/- minutes
    calc: string;                                       // + or -
}