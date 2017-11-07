import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppinfoPage } from './appinfo';

@NgModule({
  declarations: [
    AppinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(AppinfoPage),
  ],
  exports: [ AppinfoPage ]
})
export class AppinfoPageModule {}
