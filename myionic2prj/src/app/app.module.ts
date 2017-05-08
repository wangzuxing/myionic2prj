import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MyPage0 } from '../pages/my-page0/my-page0';
import { MyPage1 } from '../pages/my-page1/my-page1';
import { MyPage2 } from '../pages/my-page2/my-page2';
import { MyPage3 } from '../pages/my-page3/my-page3';
import { MyPage4 } from '../pages/my-page4/my-page4';

import { Camera } from '@ionic-native/camera';
import { CameraPreview } from '@ionic-native/camera-preview';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MyPage0,
    MyPage1,
    MyPage2,
    MyPage3,
    MyPage4
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MyPage0,
    MyPage1,
    MyPage2,
    MyPage3,
    MyPage4
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    CameraPreview,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
