import { SensorsPageModule } from '../sensors/sensors.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroPage } from './intro';

@NgModule({
  declarations: [
    IntroPage,
  ],
  imports: [
    SensorsPageModule,
    IonicPageModule.forChild(IntroPage),
  ],
  exports: [ IntroPage ]
})
export class IntroPageModule {}
