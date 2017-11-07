import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SensorsPage } from './sensors';

@NgModule({
  declarations: [
    SensorsPage,
  ],
  imports: [
    IonicPageModule.forChild(SensorsPage),
  ],
  exports: [ SensorsPage ]
})
export class SensorsPageModule {}
