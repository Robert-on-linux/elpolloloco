class SmallChicken extends MoveableObject {
  offset = {
    top: 5,
    bottom: 5,
    left: 30,
    right: 25,
  };

  y = 390;
  width = 35;
  height = 30;

  IMAGES_DEAD = [
    '/src/img/3_enemies_chicken/chicken_small/2_dead/dead.png',
    '/src/img/3_enemies_chicken/chicken_small/2_dead/dead.png'
  ];

  IMAGES_WALKING = [
    '/src/img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
    '/src/img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
    '/src/img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
  ];

  constructor(speedY) {
    super().loadImage('/src/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DEAD);
    this.animate();
    this.speedY = speedY;
    this.x = 600 + Math.random() * 2400;
  }

  animate() {
    setInterval(() => this.moveLeft(), 1000 / 60);
    setInterval(() => this.playAnimationChicken(), 100);
  }

  playAnimationChicken() {
    if (this.isDead()) {
      this.playAnimation(this.IMAGES_DEAD);
    } else {
      this.playAnimation(this.IMAGES_WALKING);
    }
  }
}