import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, FormControl } from "@angular/forms";

import { WeekplanPage } from './weekplan';

@NgModule({
  declarations: [
    WeekplanPage,
  ],
  imports: [
    IonicPageModule.forChild(WeekplanPage),
  ],
  exports:   [ WeekplanPage ]
})
export class WeekplanPageModule {}
