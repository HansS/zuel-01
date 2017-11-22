import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeekplanEditPage } from './weekplan-edit';

@NgModule({
  declarations: [
    WeekplanEditPage,
  ],
  imports: [
    IonicPageModule.forChild(WeekplanEditPage),
  ],
  exports:   [ WeekplanEditPage ]
})
export class WeekplanEditPageModule {}
