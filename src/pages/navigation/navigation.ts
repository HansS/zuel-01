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
    this.navCtrl.push('SensorEditPage', {'sensortypename': 'light'})
  }
  openHeizung(){
    this.navCtrl.push('SensorEditPage', {'sensortypename': 'temperature-plus'})
  }
  openKuehlgeraet(){
    this.navCtrl.push('SensorEditPage', {'sensortypename': 'temperature-minus'})
  }
  openLuftbefeuchter(){
    this.navCtrl.push('SensorEditPage', {'sensortypename': 'humidity-plus'})
  }
  openLufttrockner(){
    this.navCtrl.push('SensorEditPage', {'sensortypename': 'humidity-minus'})
  }
  openWeekplan(){
    this.navCtrl.push('WeekplanPage', {'sensortypename': 'light'})
  }
}
