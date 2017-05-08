import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPage2 } from './my-page2';

@NgModule({
  declarations: [
    MyPage2,
  ],
  imports: [
    IonicPageModule.forChild(MyPage2), //IonicPage, IonicPageModule.
  ],
  exports: [
    MyPage2
  ]
})
export class MyPage2Module {}
