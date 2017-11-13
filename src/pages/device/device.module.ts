import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevicePage } from './device';
import { DeviceService } from './device.service';

@NgModule({
  declarations: [
    DevicePage,
  ],
  imports: [ IonicPageModule.forChild(DevicePage)],
  exports: [ DevicePage ],
  providers: [ DeviceService ]
})
export class DevicePageModule {}
