import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceipeTabsPage } from './receipe-tabs';

@NgModule({
  declarations: [
    ReceipeTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReceipeTabsPage),
  ],
  exports: [ ReceipeTabsPage ]
})
export class ReceipeTabsPageModule {}
