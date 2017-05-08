import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPage1 } from './my-page1';

@NgModule({
  declarations: [
    MyPage1,
  ],
  imports: [
    IonicPageModule.forChild(MyPage1), //IonicPage, IonicPageModule.
  ],
  exports: [
    MyPage1
  ]
})
export class MyPage1Module {}
