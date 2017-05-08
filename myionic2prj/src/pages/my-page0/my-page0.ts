import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyPage0 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-page0',
  templateUrl: 'my-page0.html',
})
export class MyPage0 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage0');
  }

  goToHomePage() {
     //push another page onto the history stack
     //causing the nav controller to animate the new page in
     //this.navCtrl.push(HomePage);
     this.navCtrl.pop();
  }

}
