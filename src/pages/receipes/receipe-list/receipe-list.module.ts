import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceipeListPage } from './receipe-list';

@NgModule({
  declarations: [
    ReceipeListPage,
  ],
  imports: [
    IonicPageModule.forChild(ReceipeListPage),
  ],
  exports: [ ReceipeListPage ]
})
export class ReceipeListPageModule {}
