 
export class SensorType {
    constructor(
        public typename: string,
        public  displayname: string, 
        public devicename: string, 
        public unit: string, 
        public param?: string, 
        public paramvalues?: string[]){}
}

export class SensorValue {
  constructor(  
      public datetime: string, 
      public value: string){  }
}

export class WeekPlanType {
    constructor(
        public typename: string, 
        public displayname: string){}
}

export class Offset {
    constructor(
        public minutes: number, 
        public israndom: boolean, 
        public offsettype: string, 
        public settimetype: string){}
}

export class WeekPlan {
    constructor(
        typename: string, 
        displayname: string, 
        sensortypename: string, 
        planname: string, offset: Offset, 
        dayplans: DayPlan[]){}
}

export class DayPlan {
    constructor(
        // startday
        startday: string, 
        setstarttime: string, 
        starttime: string, 
        // endday
        endday: string,
        setendtime: string, 
        endtime: string,

    ){}

}

export class Sensor {
    constructor(
        public id: number,
        public  uuid: string, 
        public sensortype: SensorType,
        public  sensorsetvalue: number,
        public  ison: boolean,
        public  isturnon: boolean,
        public isweekplan: boolean, 
        public weekplantype: WeekPlanType, 
        public weekplanname: string, 
        public weekplan: WeekPlan, 
        public islog: boolean, 
        public  sensorvalue?: SensorValue, 
        public sensorvalues?: SensorValue[]){}
}
