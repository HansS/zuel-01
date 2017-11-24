import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeekplanWeeklyPage } from './weekplan-weekly';

@NgModule({
  declarations: [
    WeekplanWeeklyPage,
  ],
  imports: [
    IonicPageModule.forChild(WeekplanWeeklyPage),
  ],
})
export class weekplanWeeklyPageModule {}
