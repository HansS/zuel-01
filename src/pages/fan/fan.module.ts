import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FanPage } from './fan';

@NgModule({
  declarations: [
    FanPage,
  ],
  imports: [
    IonicPageModule.forChild(FanPage),
  ],
  exports: [ FanPage ]
})
export class FanPageModule {}
