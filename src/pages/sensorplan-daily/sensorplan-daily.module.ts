import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SensorplanDailyPage } from './sensorplan-daily';

@NgModule({
  declarations: [
    SensorplanDailyPage,
  ],
  imports: [
    IonicPageModule.forChild(SensorplanDailyPage),
  ],
})
export class SensorplanDailyPageModule {}
