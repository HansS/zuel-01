import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SensorplanWeeklyPage } from './sensorplan-weekly';

@NgModule({
  declarations: [
    SensorplanWeeklyPage,
  ],
  imports: [
    IonicPageModule.forChild(SensorplanWeeklyPage),
  ],
})
export class SensorplanWeeklyPageModule {}
