import { Sensorhistory } from './sensorhistory.interface';
import { Sensorplan } from './sensorplan.interface';

export interface Sensor {
    id: number;
    sensortype: string;
    sensorunit?: string;
    sensorparam: string;
    uuid?: string;
    displayname: string;
    offset?: number,
    israndom?: boolean,
    ison?: boolean;
    currentvalue?: Sensorhistory;
    ishistory?: boolean;
    history?: Sensorhistory[]
    isweekplan: boolean;
    sensorweek: Sensorplan[]

}