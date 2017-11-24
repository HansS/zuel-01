import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeleuchtungPage } from './beleuchtung';

@NgModule({
  declarations: [
    BeleuchtungPage,
  ],
  imports: [
    IonicPageModule.forChild(BeleuchtungPage),
  ],
})
export class BeleuchtungPageModule {}
