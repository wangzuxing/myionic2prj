import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPage3 } from './my-page3';

@NgModule({
  declarations: [
    MyPage3,
  ],
  imports: [
    IonicPageModule.forChild(MyPage3), //IonicPage, IonicPageModule.
  ],
  exports: [
    MyPage3
  ]
})
export class MyPage3Module {}
