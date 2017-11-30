import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LightPage } from '../light/light';
@IonicPage()
@Component({
  selector: 'page-navigation',
  templateUrl: 'navigation.html',
})
export class NavigationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationPage');
  }
  openBeleuchtung(){
    this.navCtrl.push('SensorEditPage', {'sensortype': 'light'})
  }
  openHeizung(){
    this.navCtrl.push('SensorEditPage', {'sensortype': 'temperature-plus'})
  }
  openKuehlgeraet(){
    this.navCtrl.push('SensorEditPage', {'sensortype': 'temperature-minus'})
  }
  openLuftbefeuchter(){
    this.navCtrl.push('SensorEditPage', {'sensortype': 'humidity-plus'})
  }
  openLufttrockner(){
    this.navCtrl.push('SensorEditPage', {'sensortype': 'humidity-minus'})
  }
}