import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceipesPage } from './receipes';

@NgModule({
  declarations: [
    ReceipesPage,
  ],
  imports: [
    IonicPageModule.forChild(ReceipesPage),
  ],
  exports: [ ReceipesPage ]
})
export class ReceipesPageModule {}
