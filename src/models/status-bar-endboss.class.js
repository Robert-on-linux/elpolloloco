class StatusBarEndboss extends DrawableObject {
    
    x = 500;
    y = 50;

    width = 0;
    height = 0;

    percentage = 100;

    IMAGES_STATUS_Endboss = [
      './src/img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
      './src/img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
      './src/img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
      './src/img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
      './src/img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
      './src/img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png'
    ];
  
    constructor() {
      super().loadImages(this.IMAGES_STATUS_Endboss);
      this.setPercentage(this.percentage);
    }
  
    setPercentage(percentage) {
      this.percentage = percentage;
      let path = this.IMAGES_STATUS_Endboss[this.resolveImageIndex()];
      this.img = this.imageCache[path];
    }
  
    resolveImageIndex() {
      return this.percentage / 20;
    }
  }