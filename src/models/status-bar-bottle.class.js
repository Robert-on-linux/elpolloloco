class StatusBarBottle extends DrawableObject {
  x = 10;
  y = 100;

  width = 200;
  height = 50;

  percentage = 0;

  IMAGES_STATUS_BOTTLE = [
    '/src/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
    '/src/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
    '/src/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
    '/src/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
    '/src/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
    '/src/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
    '/src/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
    '/src/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
    '/src/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
    '/src/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png'
  ];

  constructor() {
    super();
    this.loadImages(this.IMAGES_STATUS_BOTTLE);
    this.setPercentage(this.percentage);
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES_STATUS_BOTTLE[this.resolvImageIndex()];
    this.img = this.imageCache[path];
    console.log('this.imageCache[path]: ',this.imageCache[path]);
  }

  resolvImageIndex() {    // Attention: don`t draw more bottles !!
    // console.log('this.percentage: ',this.percentage);
    // if (this.percentage >= 10){this.percentage = 9};
    // console.log('this.percentage (2): ',this.percentage);
    return this.percentage;
  }
}