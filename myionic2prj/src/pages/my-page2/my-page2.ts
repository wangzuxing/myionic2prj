import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, Platform, NavParams } from 'ionic-angular';

declare var BMap; //declare var BMap: any;

/**
 * Generated class for the MyPage2 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-page2',
  templateUrl: 'my-page2.html',
})

export class MyPage2 {
  //public map: any;
  //public navParams: NavParams
  //platform: Platform
  //@ViewChild('map') mapElement: ElementRef;
  isMarker: boolean = false;

  constructor(public navCtrl: NavController, public platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('Loading Amap');
    //this.loadMap();
  }

  ionViewWillEnter() {
    //let map = this.map = new BMap.Map(this.mapElement.nativeElement, { enableMapClick: true });
    var map = new BMap.Map("container"); // 创建地图实例     
  
    let point = new BMap.Point(113.400675, 22.88816);//(116.06827, 22.549284);
    map.centerAndZoom(point, 16);//设置中心和地图显示级别

    //map.addControl(new BMap.NavigationControl());      
    map.addControl(new BMap.ScaleControl());       
    map.setDefaultCursor("crosshair"); 

    map.enableScrollWheelZoom();//启动滚轮放大缩小，默认禁用
    map.enableContinuousZoom(); //连续缩放效果，默认禁用

    //地图放大缩小控件
    let sizeMap = new BMap.Size(10, 80);//显示位置
    map.addControl(new BMap.NavigationControl({
      anchor: BMap.BMAP_ANCHOR_BOTTOM_RIGHT,//显示方向
      offset: sizeMap
    }));

    //3D效果矢量图控件
    let size3D = new BMap.Size(10, 10);
    map.addControl(new BMap.MapTypeControl({
      anchor: BMap.BMAP_ANCHOR_TOP_RIGHT,
      offset: size3D
    }));
    map.setCurrentCity("广州");//3D效果，设置城市

    //城市列表控件
    let sizeCity = new BMap.Size(10, 10);
    map.addControl(new BMap.CityListControl({
      anchor: BMap.BMAP_ANCHOR_TOP_LEFT,
      offset: sizeCity
    }));

    //添加自定义的控件展示地图中
    function showAttractionControl() {
      //定义显示位置
      this.defaultAnchor = BMap.BMAP_ANCHOR_TOP_RIGHT;
      this.defaultOffset = new BMap.Size(10, 50);
    }

    //初始化控件
    showAttractionControl.prototype = new BMap.Control();
    showAttractionControl.prototype.initialize = function (map) {
      let div = document.createElement("button");// 创建一个按钮
      div.appendChild(document.createTextNode("附近景点"));
      div.style.width = "135px";
      div.style.height = "35px";
      div.style.borderRadius = "15px";

      div.onclick = function (e) {
        let local = new BMap.LocalSearch(map, {
          renderOptions: { map: map, autoViewport: true }
        });
        local.search("景点");
      }
      map.getContainer().appendChild(div);// 添加DOM元素到地图中
      return div;
    }
    let showAttraction = new showAttractionControl();
    map.addControl(showAttraction);//添加控件

    let icon = new BMap.Icon('../../img/fpack.png', new BMap.Size(32, 32), {
        anchor: new BMap.Size(10, 30),
    });

    var myIcon = new BMap.Icon("http://api.map.baidu.com/img/markers.png", new BMap.Size(23, 25), {  
      offset: new BMap.Size(10, 25), // 指定定位位置  
      imageOffset: new BMap.Size(0, 0 - 10 * 25) // 设置图片偏移  
    });  
        
    var marker=new BMap.Marker(new BMap.Point(113.400675, 22.88816), {
      icon: myIcon,
      enableDragging: true,
      raiseOnDrag: true
    }); 
    map.addOverlay(marker);  

    var preMarker;

    map.addEventListener("click", function(e){   //点击事件    
    if(!e.overlay){  
        var myIcon = new BMap.Icon("http://api.map.baidu.com/img/markers.png", new BMap.Size(23, 25), {  
            offset: new BMap.Size(10, 25), // 指定定位位置  
            imageOffset: new BMap.Size(0, 0 - 10 * 25) // 设置图片偏移  
        });  
        var marker=new BMap.Marker(e.point,{icon:myIcon});
        if(this.isMarker){
          map.removeOverlay(preMarker);  
          this.isMarker = false;
        }
        map.addOverlay(marker);  
        preMarker=marker; 
        this.isMarker = true;
    }   
    });
  }

  goToHomePage() {
     //push another page onto the history stack
     //causing the nav controller to animate the new page in
     //this.navCtrl.push(HomePage);
     this.navCtrl.pop();
  }

}
