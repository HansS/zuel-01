import { NavigationPage } from '../navigation/navigation';
import { Component, ViewChild, trigger, transition, style, state, animate, keyframes } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
//import { MainPage } from '../main/main';
//import { SensorsPage } from './../sensors/sensors';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
  animations: [

    trigger('bounce', [
      state('*', style({
        transform: 'translateX(0)'
      })),
      transition('* => rightSwipe', animate('700ms ease-out', keyframes([
        style({transform: 'translateX(0)', offset: 0}),
        style({transform: 'translateX(-65px)', offset: .3}),
        style({transform: 'translateX(0)', offset: 1})
      ]))),
      transition('* => leftSwipe', animate('700ms ease-out', keyframes([
        style({transform: 'translateX(0)', offset: 0}),
        style({transform: 'translateX(65px)', offset: .3}),
        style({transform: 'translateX(0)', offset: 1})
      ])))
    ])
  ]
})
export class IntroPage {
  @ViewChild(Slides) slides: Slides;
  skipMsg: string = "Skip";
  state: string = 'x';

  constructor(public navCtrl: NavController) {

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
  openDevice(){
    this.navCtrl.push('DeviceListPage')
  }

  openNavigationPage(){
    this.navCtrl.push('NavigationPage');
  }

  skip() {
    this.navCtrl.push('SensorsPage');
  }

  slideChanged() {
    if (this.slides.isEnd())
      this.skipMsg = "Alright, I got it";
  }

  slideMoved() {
    if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex())
      this.state = 'rightSwipe';
    else
      this.state = 'leftSwipe';
  }

  animationDone() {
    this.state = 'x';
  }

}
