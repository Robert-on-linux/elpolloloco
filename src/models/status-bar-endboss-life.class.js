class StatusBarEndbossLife extends DrawableObject {

    x = 485;
    y = 52;
    
    width = 0;
    height = 0;
    percentage = 100;
    
    IMAGES_STATUS_LIFE = [
      './src/img/7_statusbars/3_icons/icon_health_endboss.png'
    ];
  
    constructor() {
      super().loadImage(this.IMAGES_STATUS_LIFE);
    }
  }