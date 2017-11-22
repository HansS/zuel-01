import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeekplanDailyPage } from './weekplan-daily';

@NgModule({
  declarations: [
    WeekplanDailyPage,
  ],
  imports: [
    IonicPageModule.forChild(WeekplanDailyPage),
  ],
})
export class weekplanDailyPageModule {}
