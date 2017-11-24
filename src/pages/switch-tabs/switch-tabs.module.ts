import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwitchTabsPage } from './switch-tabs';

@NgModule({
  declarations: [
    SwitchTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(SwitchTabsPage),
  ],
  exports: [ SwitchTabsPage ]
})
export class SwitchTabsPageModule {}
