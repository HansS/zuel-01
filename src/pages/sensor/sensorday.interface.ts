import { DayPlan } from "../weekplan/dayplan.interface";

export interface SensorDay {
  sensortypename: string; // light, temperature, humidity
  day: string; // mo  di mi do fr sa so
  dayplans: DayPlan[];
}
