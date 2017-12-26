import { loadAnimation } from '../../utils/animation';

const anss = ' animated';

Page({
  data: {
    animatess:'',
    array: [
      'bounce', 'flash', 'pulse', 'rubberBand','shake','swing','tada','wobble','jello',
      'bounceIn','bounceInDown', 'bounceInLeft','bounceInRight','bounceInUp','bounceOut','bounceOutDown','bounceOutLeft','bounceOutRight','bounceOutUp',
      'fadeIn','fadeInDown','fadeInDownBig','fadeInLeft','fadeInLeftBig','fadeInRight','fadeInRightBig','fadeInUp','fadeInUpBig','fadeOut','fadeOutDown','fadeOutDownBig','fadeOutLeft','fadeOutLeftBig','fadeOutRight','fadeOutRightBig','fadeOutUp','fadeOutUpBig',
      'flip','flipInX','flipInY','flipOutX','flipOutY','lightSpeedIn','lightSpeedOut',
      'rotateIn','rotateInDownLeft','rotateInDownRight','rotateInUpLeft','rotateInUpRight','rotateOut','rotateOutDownLeft','rotateOutDownRight','rotateOutUpLeft','rotateOutUpRight',
      'slideInUp','slideInDown','slideInLeft','slideInRight','slideOutUp','slideOutDown','slideOutLeft','slideOutRight',
      'zoomIn','zoomInDown','zoomInLeft','zoomInRight','zoomInUp','zoomOut','zoomOutDown','zoomOutLeft','zoomOutRight','zoomOutUp',
      'hinge','rollIn','rollOut'
    ],
    objectArray:[{"index":0,"name":"bounce"},{"index":1,"name":"flash"},{"index":2,"name":"pulse"},{"index":3,"name":"rubberBand"},{"index":4,"name":"shake"},{"index":5,"name":"swing"},{"index":6,"name":"tada"},{"index":7,"name":"wobble"},{"index":8,"name":"jello"},{"index":9,"name":"bounceIn"},{"index":10,"name":"bounceInDown"},{"index":11,"name":"bounceInLeft"},{"index":12,"name":"bounceInRight"},{"index":13,"name":"bounceInUp"},{"index":14,"name":"bounceOut"},{"index":15,"name":"bounceOutDown"},{"index":16,"name":"bounceOutLeft"},{"index":17,"name":"bounceOutRight"},{"index":18,"name":"bounceOutUp"},{"index":19,"name":"fadeIn"},{"index":20,"name":"fadeInDown"},{"index":21,"name":"fadeInDownBig"},{"index":22,"name":"fadeInLeft"},{"index":23,"name":"fadeInLeftBig"},{"index":24,"name":"fadeInRight"},{"index":25,"name":"fadeInRightBig"},{"index":26,"name":"fadeInUp"},{"index":27,"name":"fadeInUpBig"},{"index":28,"name":"fadeOut"},{"index":29,"name":"fadeOutDown"},{"index":30,"name":"fadeOutDownBig"},{"index":31,"name":"fadeOutLeft"},{"index":32,"name":"fadeOutLeftBig"},{"index":33,"name":"fadeOutRight"},{"index":34,"name":"fadeOutRightBig"},{"index":35,"name":"fadeOutUp"},{"index":36,"name":"fadeOutUpBig"},{"index":37,"name":"flip"},{"index":38,"name":"flipInX"},{"index":39,"name":"flipInY"},{"index":40,"name":"flipOutX"},{"index":41,"name":"flipOutY"},{"index":42,"name":"lightSpeedIn"},{"index":43,"name":"lightSpeedOut"},{"index":44,"name":"rotateIn"},{"index":45,"name":"rotateInDownLeft"},{"index":46,"name":"rotateInDownRight"},{"index":47,"name":"rotateInUpLeft"},{"index":48,"name":"rotateInUpRight"},{"index":49,"name":"rotateOut"},{"index":50,"name":"rotateOutDownLeft"},{"index":51,"name":"rotateOutDownRight"},{"index":52,"name":"rotateOutUpLeft"},{"index":53,"name":"rotateOutUpRight"},{"index":54,"name":"slideInUp"},{"index":55,"name":"slideInDown"},{"index":56,"name":"slideInLeft"},{"index":57,"name":"slideInRight"},{"index":58,"name":"slideOutUp"},{"index":59,"name":"slideOutDown"},{"index":60,"name":"slideOutLeft"},{"index":61,"name":"slideOutRight"},{"index":62,"name":"zoomIn"},{"index":63,"name":"zoomInDown"},{"index":64,"name":"zoomInLeft"},{"index":65,"name":"zoomInRight"},{"index":66,"name":"zoomInUp"},{"index":67,"name":"zoomOut"},{"index":68,"name":"zoomOutDown"},{"index":69,"name":"zoomOutLeft"},{"index":70,"name":"zoomOutRight"},{"index":71,"name":"zoomOutUp"},{"index":72,"name":"hinge"},{"index":73,"name":"rollIn"},{"index":74,"name":"rollOut"}],
    index: 0
  },
  bindPickerChange: function(e) {
    let self = this;
    self.setData({
      index: e.detail.value
    });
    let currss = self.data.array[e.detail.value] + anss;
    let an = new loadAnimation(self);
    an.add({animatess:currss}).clear({animatess:''});
  },
  animate:function(){
    let self = this;
    let currss = self.data.array[self.data.index] + anss;
    let an = new loadAnimation(self);
    an.add({animatess:currss}).clear({animatess:''});
  }

});
