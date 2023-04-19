class CollectCoin extends MoveableObject {
    offset = {
      top: 35,
      bottom: 35,
      left: 35,
      right: 35,
    };
 
    x = 400;

    width = 120;
    height = 120;
    
    IMAGES_COIN = [
        './src/img/8_coin/coin_1.png', 
        './src/img/8_coin/coin_2.png'
    ];
  
    constructor(x,y) {
      super().loadImage('./src/img/8_coin/coin_1.png');
      this.loadImages(this.IMAGES_COIN);
      this.animate();
      this.x = x;
      this.y = y;
    }
  
    animate() {
      setInterval(() => this.playAnimation(this.IMAGES_COIN), 100);
    }
  }
  