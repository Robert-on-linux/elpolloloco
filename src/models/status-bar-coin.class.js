class StatusBarCoin extends DrawableObject {
    
    x = 10;
    y = 50;

    width = 200;
    height = 50;
    
    percentage = 0;

    IMAGES_STATUS_COIN = [
      '/src/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
      '/src/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
      '/src/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
      '/src/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
      '/src/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
      '/src/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];
  
    constructor() {
      super();
      this.loadImages(this.IMAGES_STATUS_COIN);
      this.setPercentage(this.percentage);
    }
  
    setPercentage(percentage) {
      this.percentage = percentage;
      let path = this.IMAGES_STATUS_COIN[this.resolveImageIndex()];
      this.img = this.imageCache[path];
    }
  
    resolveImageIndex() {
      return this.percentage;
    }
  }