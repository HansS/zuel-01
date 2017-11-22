import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { weekplanWeeklyPage } from './weekplan-weekly';

@NgModule({
  declarations: [
    weekplanWeeklyPage,
  ],
  imports: [
    IonicPageModule.forChild(weekplanWeeklyPage),
  ],
})
export class weekplanWeeklyPageModule {}
