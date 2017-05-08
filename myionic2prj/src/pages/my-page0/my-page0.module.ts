import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPage0 } from './my-page0';

@NgModule({
  declarations: [
    MyPage0,
  ],
  imports: [
    IonicPageModule.forChild(MyPage0), //IonicPage, IonicPageModule.
  ],
  exports: [
    MyPage0
  ]
})
export class MyPage0Module {}
