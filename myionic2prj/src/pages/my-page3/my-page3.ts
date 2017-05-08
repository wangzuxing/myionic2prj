import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the MyPage3 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-page3',
  templateUrl: 'my-page3.html',
})

export class MyPage3 {
   images: string; // = '../../img/fpark.png';

   constructor(public navCtrl: NavController, public camera: Camera){
      this.images = 'data:image/jpeg;base64,'+'../../img/fpark.png';
   } 

   takePhoto() {
      var options = {
         quality: 80,
         destinationType: this.camera.DestinationType.DATA_URL, //CameraOptions
         sourceType: this.camera.PictureSourceType.CAMERA,
         allowEdit: false,
         encodingType: this.camera.EncodingType.JPEG,
         saveToPhotoAlbum: false
      };
      this.camera.getPicture(options).then((imageData) => {
         // imageData is either a base64 encoded string or a file URI, If it's base64:
         let base64Image = 'data:image/jpeg;base64,' + imageData;
         this.images = base64Image;
      }, (err) => {
        // Handle error
      });
   }  

   takepic() {
      var options = {
          destinationType: 0,
          sourceType: 1,
          encodingType: 0,
          quality:100,
          allowEdit: false,
          saveToPhotoAlbum: false
      };
        
      this.camera.getPicture(options).then((data) => {
          var imgdata = "data:image/jpeg;base64," + data;
          this.images = imgdata;
      }, (error) => {
            alert(error);
      });
    }
}
