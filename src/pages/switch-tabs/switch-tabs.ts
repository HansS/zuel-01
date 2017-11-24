import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides, Tabs, Tab } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-switch-tabs',
  templateUrl: 'switch-tabs.html'
})
export class SwitchTabsPage {

  @ViewChild(Slides) slides: Slides;
  @ViewChild('switchTabs') tabsRef: Tabs;
  tabIndex = 3;
  // slideIndex = 0;
  beleuchtungRoot = 'LightPage'
  heizungRoot = 'TemperaturePage'
  luftbefeuchterRoot = 'HumidityPage'
  lufttrocknerRoot = 'LightPage'


  constructor(public navCtrl: NavController) {}

  iconClicked(index: number){
    console.log('iconClicked:', index);
    
  }
  ionViewDidEnter() {
    //this.tabsRef.select(2);
   }
   onTabClick(tab: Tab){
     console.log('tab-click',tab.index);
     
   }
  goToSlide(index:number) {
    this.slides.slideTo(index);
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    this.tabIndex = currentIndex;
    this.tabsRef.select(currentIndex);
    
    console.log('Current index is', currentIndex);
  }
  selectSlide(tab: Tab){
    console.log('selectSlide:',tab.index);
    
  }
  ionChanged(tab: Tab){
    let currentIndex = this.tabsRef.getIndex(tab);
    console.log('ion-changed',tab.index);
    
  }

} // class
