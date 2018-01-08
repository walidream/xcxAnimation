import { loadAnimation } from '../../utils/animation';

const anss = 'zoomIn animated';

Page({
  data: {
    animatess:'',
    animatStatus:'end',
    isTab:true
  },
  animateProperty:function(){
    this.setData({isTab:true});
  },
  animateIncident:function(){
    this.setData({isTab:false});
  },
  //执行1次
  performCount1:function(){
    let self = this;
    let an = new loadAnimation(self);
    let name = anss + ' cout1';
    an.add({animatess:name,animatStatus:'default'}).clear({animatess:''});
  },
  //执行5次
  performCount5:function(){
    let self = this;
    let an = new loadAnimation(self);
    let name = anss + ' cout5';
    an.add({animatess:name,animatStatus:'default'}).clear({animatess:''},5000);
  },
  //无限循环
  performInfinite:function(){
    let self = this;
    let an = new loadAnimation(self);
    let name = anss + ' infinite';
    an.add({animatess:name});
  },
  //延迟3s
  delay3s:function(){
    let self = this;
    let an = new loadAnimation(self);
    let name = anss + ' delay3';
    an.add({animatess:name}).clear({animatess:''},4000);
  },
  //延迟5s
  delay5s:function(){
    let self = this;
    let an = new loadAnimation(self);
    let name = anss + ' delay5';
    an.add({animatess:name}).clear({animatess:''},6000);
  },
  //线性过渡
  timingLinear:function(){
    let self = this;
    let an = new loadAnimation(self);
    let name = anss + ' linear';
    an.add({animatess:name}).clear({animatess:''});
  },
  //平滑过渡
  timingEase:function(){
    let self = this;
    let an = new loadAnimation(self);
    let name = anss + ' ease';
    an.add({animatess:name}).clear({animatess:''});
  },
  //由慢到快
  timingEaseIn:function(){
    let self = this;
    let an = new loadAnimation(self);
    let name = anss + ' ease-in';
    an.add({animatess:name}).clear({animatess:''});
  },
  //由快到慢
  timingEaseOut:function(){
    let self = this;
    let an = new loadAnimation(self);
    let name = anss + ' ease-out';
    an.add({animatess:name}).clear({animatess:''});
  },
  //由慢到快再到慢
  timingEaseInOut:function(){
    let self = this;
    let an = new loadAnimation(self);
    let name = anss + ' ease-in-out';
    an.add({animatess:name}).clear({animatess:''});
  },
  animationStatus:function(e){
    let self = this;
    let status = e.currentTarget.dataset.status;
    self.setData({animatStatus:status},()=>{
      animationIsStatus(self);
    });
  },
  //动画执行前
  animateStart:function(){
    wx.showToast({
      title: '动画之前触发了我',
      icon: 'success',
      duration: 2000
    })
  },
  //动画一次迭代完成触发
  animateOne:function(){
    wx.showToast({
      title: '每一次迭代完成',
      icon: 'success',
      duration: 2000
    })
  },
  //动画结束触发
  animateEnd:function(){
    console.log(1);
    wx.showToast({
      title: '动画结束触发',
      icon: 'success',
      duration: 2000
    });
  }
});

function animationIsStatus(self){
  let an = new loadAnimation(self);
  let name = anss + ' cout5';
  an.add({animatess:name}).clear({animatess:''},5000);
}











