import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HumidityPage } from './humidity';

@NgModule({
  declarations: [
    HumidityPage,
  ],
  imports: [
    IonicPageModule.forChild(HumidityPage),
  ],
  exports: [ HumidityPage ]
})
export class HumidityPageModule {}
