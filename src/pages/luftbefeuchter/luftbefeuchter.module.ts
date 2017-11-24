import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LuftbefeuchterPage } from './luftbefeuchter';

@NgModule({
  declarations: [
    LuftbefeuchterPage,
  ],
  imports: [
    IonicPageModule.forChild(LuftbefeuchterPage),
  ],
})
export class LuftbefeuchterPageModule {}
