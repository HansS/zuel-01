import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {  } from "@angular/forms";
import {ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, FormArray, FormArrayName, FormControlName } from "@angular/forms";

import { SensorEditPage } from './sensor-edit';

@NgModule({
  declarations: [
    SensorEditPage,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    IonicPageModule.forChild(SensorEditPage),
  ],
  exports: [ SensorEditPage ]
})
export class SensorEditPageModule {}
