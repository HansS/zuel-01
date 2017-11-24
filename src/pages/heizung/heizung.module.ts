import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeizungPage } from './heizung';

@NgModule({
  declarations: [
    HeizungPage,
  ],
  imports: [
    IonicPageModule.forChild(HeizungPage),
  ],
})
export class HeizungPageModule {}
