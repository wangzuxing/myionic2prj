import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyPage0 } from '../my-page0/my-page0';
import { MyPage1 } from '../my-page1/my-page1';
import { MyPage2 } from '../my-page2/my-page2';
import { MyPage3 } from '../my-page3/my-page3';
import { MyPage4 } from '../my-page4/my-page4';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToMyPage0() {
     //push another page onto the history stack
     //causing the nav controller to animate the new page in
     this.navCtrl.push(MyPage0);
  }

  goToMyPage1() {
     //push another page onto the history stack
     //causing the nav controller to animate the new page in
     this.navCtrl.push(MyPage1);
  }

  goToMyPage2() {
     //push another page onto the history stack
     //causing the nav controller to animate the new page in
     this.navCtrl.push(MyPage2);
  }

  goToMyPage3() {
     //push another page onto the history stack
     //causing the nav controller to animate the new page in
     this.navCtrl.push(MyPage3);
  }

  goToMyPage4() {
     //push another page onto the history stack
     //causing the nav controller to animate the new page in
     this.navCtrl.push(MyPage4);
  }

}
