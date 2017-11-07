import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceipeDetailsPage } from './receipe-details';

@NgModule({
  declarations: [
    ReceipeDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReceipeDetailsPage),
  ],
  exports: [ ReceipeDetailsPage ]
})
export class ReceipeDetailsPageModule {}
