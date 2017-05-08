import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPage4 } from './my-page4';

@NgModule({
  declarations: [
    MyPage4,
  ],
  imports: [
    IonicPageModule.forChild(MyPage4), //IonicPage, IonicPageModule.
  ],
  exports: [
    MyPage4
  ]
})
export class MyPage4Module {}
