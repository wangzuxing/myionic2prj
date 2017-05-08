import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var AMap; //declare var AMap: any;

/**
 * Generated class for the MyPage1 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-page1',
  templateUrl: 'my-page1.html',
})

export class MyPage1 {
  public map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('Loading Amap');
    this.loadMap();
    this.loadToolBar();
  }

  loadToolBar(){
    AMap.plugin('AMap.ToolBar',function(){//异步
      var toolbar = new AMap.ToolBar();
      this.map.plugin(toolbar);
    });
  }

  loadMap() {
    this.map = new AMap.Map('container', {
      resizeEnable: true,
      //mapStyle:'normal',  地图类型: normal  dark  blue_night  fresh  light
      zoom: 15,
      center: [113.400675, 22.88816] //[116.39,39.9] center: [116.397428, 39.90923]
    });

    //var toolbar = new AMap.ToolBar();
    //this.map.plugin(toolbar);

    //this.map.setFeatures(['road','point','building']); //多个种类要素显示

    function refresh(e) {
      this.map.setMapStyle("dark");
    };

    //创建并添加工具条控件AMap.plugin
    this.map.plugin(['AMap.ToolBar'], function () {
      this.map.addControl(new AMap.ToolBar());
    });

    //创建高级信息窗体并在指定位置打开
    this.map.plugin(['AMap.AdvancedInfoWindow'],function(){
      var infowindow = new AMap.AdvancedInfoWindow({
        content: '<div class="info-title">高德地图</div><div class="info-content">'+
            '<img src="http://webapi.amap.com/images/amap.jpg">'+
            '高德是中国领先的数字地图内容、导航和位置服务解决方案提供商。<br>'+
            '<a target="_blank" href="http://mobile.amap.com/">点击下载高德地图</a></div>',
        offset: new AMap.Pixel(0, -30)
      });
      infowindow.open(this.map, this.map.getCenter());//[116.480983, 39.989628]);
    });

    let marker = new AMap.Marker({
      position: this.map.getCenter(),
      draggable: true,
      cursor: 'move'
    });

    marker.setLabel({
      offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
      content: "华科尔科技有限公司"
    });

    marker.on('click',function(e){
      marker.markOnAMAP({
        name:'华科尔科技',
        position:marker.getPosition()
      })
    });

    //marker.content='华科尔科技有限公司'+this.map.getCenter(); 
    //marker.on('click', markerClick); //绑定单击事件

    marker.setMap(this.map);
    // 设置点标记的动画效果，此处为弹跳效果
    marker.setAnimation('AMAP_ANIMATION_BOUNCE');

    function markerClick(e){
      var infoWindow = new AMap.InfoWindow();
      infoWindow.setContent(e.target.content);
      infoWindow.open(this.map, e.target.getPosition());
    };
  }

  goToHomePage() {
     //push another page onto the history stack
     //causing the nav controller to animate the new page in
     //this.navCtrl.push(HomePage);
     this.navCtrl.pop();
  }

}
