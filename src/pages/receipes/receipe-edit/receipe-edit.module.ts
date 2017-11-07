import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceipeEditPage } from './receipe-edit';

@NgModule({
  declarations: [
    ReceipeEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ReceipeEditPage),
  ],
  exports: [ ReceipeEditPage ]
})
export class ReceipeEditPageModule {}
