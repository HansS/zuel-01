import {
  Component,
  ViewChild,
  trigger,
  transition,
  style,
  state,
  animate,
  keyframes
} from "@angular/core";
import { NavController, Slides } from "ionic-angular";
//import { MainPage } from '../main/main';
//import { SensorsPage } from './../sensors/sensors';

@IonicPage()
@Component({
  selector: "page-intro",
  templateUrl: "intro.html",
  animations: [
    trigger("bounce", [
      state(
        "*",
        style({
          transform: "translateX(0)"
        })
      ),
      transition(
        "* => rightSwipe",
        animate(
          "700ms ease-out",
          keyframes([
            style({ transform: "translateX(0)", offset: 0 }),
            style({ transform: "translateX(-65px)", offset: 0.3 }),
            style({ transform: "translateX(0)", offset: 1 })
          ])
        )
      ),
      transition(
        "* => leftSwipe",
        animate(
          "700ms ease-out",
          keyframes([
            style({ transform: "translateX(0)", offset: 0 }),
            style({ transform: "translateX(65px)", offset: 0.3 }),
            style({ transform: "translateX(0)", offset: 1 })
          ])
        )
      )
    ])
  ]
})
export class IntroPage {
  @ViewChild(Slides) slides: Slides;
  skipMsg: string = "Skip";
  state: string = "x";

  constructor(public navCtrl: NavController) {}

  openBeleuchtung() {
    this.navCtrl.push("SensorEditPage", { sensortypename: "power" });
  }
  openHeizung() {
    this.navCtrl.push("SensorEditPage", { sensortypename: "temperature-high" });
  }
  openKuehlgeraet() {
    this.navCtrl.push("SensorEditPage", { sensortypename: "temperature-low" });
  }
  openLuftbefeuchter() {
    this.navCtrl.push("SensorEditPage", { sensortypename: "humidity-high" });
  }
  openLufttrockner() {
    this.navCtrl.push("SensorEditPage", { sensortypename: "humidity-low" });
  }

  openDevice() {
    this.navCtrl.push("DeviceListPage");
  }
} // class
