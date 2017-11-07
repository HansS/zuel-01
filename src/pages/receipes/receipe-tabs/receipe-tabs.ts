import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-receipe-tabs',
  templateUrl: 'receipe-tabs.html'
})
export class ReceipeTabsPage {

  receipesRoot = 'ReceipesPage'
  shoppingListRoot = 'ShoppingListPage'


  constructor(public navCtrl: NavController) {}

}
