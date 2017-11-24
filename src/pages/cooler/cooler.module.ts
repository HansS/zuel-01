import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoolerPage } from './cooler';

@NgModule({
  declarations: [
    CoolerPage,
  ],
  imports: [
    IonicPageModule.forChild(CoolerPage),
  ],
  exports: [ CoolerPage ]
})
export class CoolerPageModule {}
