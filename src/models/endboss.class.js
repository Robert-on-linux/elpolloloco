class Endboss extends MoveableObject {
    
    offset = {
        top: 70,
        bottom: 10,
        left: 55,
        right: 30,
      };
    
    
    height = 300;
    width = 180;
    y = 135;
    x = 3700;

    speed = 1.5;
    speedY = 15;
    isAttention = false;
    powerOfPushing = 50;

    IMAGES_WALKING = [
        './src/img/4_enemie_boss_chicken/2_alert/G5.png',
        './src/img/4_enemie_boss_chicken/2_alert/G6.png',
        './src/img/4_enemie_boss_chicken/2_alert/G7.png',
        './src/img/4_enemie_boss_chicken/2_alert/G8.png',
        './src/img/4_enemie_boss_chicken/2_alert/G9.png',
        './src/img/4_enemie_boss_chicken/2_alert/G10.png',
        './src/img/4_enemie_boss_chicken/2_alert/G11.png',
        './src/img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_ALERT = [
        './src/img/4_enemie_boss_chicken/2_alert/G5.png',
        './src/img/4_enemie_boss_chicken/2_alert/G6.png',
        './src/img/4_enemie_boss_chicken/2_alert/G7.png',
        './src/img/4_enemie_boss_chicken/2_alert/G8.png',
        './src/img/4_enemie_boss_chicken/2_alert/G9.png',
        './src/img/4_enemie_boss_chicken/2_alert/G10.png',
        './src/img/4_enemie_boss_chicken/2_alert/G11.png',
        './src/img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_HURTING = [
        './src/img/4_enemie_boss_chicken/4_hurt/G21.png',
        './src/img/4_enemie_boss_chicken/4_hurt/G22.png',
        './src/img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    IMAGES_DEAD = [
        './src/img/4_enemie_boss_chicken/5_dead/G24.png',
        './src/img/4_enemie_boss_chicken/5_dead/G25.png',
        './src/img/4_enemie_boss_chicken/5_dead/G26.png'
    ];
    IMAGES_ATTACK = [
        './src/img/4_enemie_boss_chicken/3_attack/G13.png',
        './src/img/4_enemie_boss_chicken/3_attack/G14.png',
        './src/img/4_enemie_boss_chicken/3_attack/G15.png',
        './src/img/4_enemie_boss_chicken/3_attack/G16.png',
        './src/img/4_enemie_boss_chicken/3_attack/G17.png',
        './src/img/4_enemie_boss_chicken/3_attack/G18.png',
        './src/img/4_enemie_boss_chicken/3_attack/G19.png',
        './src/img/4_enemie_boss_chicken/3_attack/G20.png'
    ];


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_HURTING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK);
        this.animate();
    }


    animate() {
        setInterval(() => {
          if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
          } else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURTING);
          } else if (this.wasHit()) {
            this.playAnimation(this.IMAGES_ATTACK);
            this.moveLeft();
          } else if (this.isAttention) {
            this.playAnimation(this.IMAGES_ALERT);
          }
        }, 100);
      }

      
      moveLeft() {
        if (this.isAtStart()) {
          this.cannotMove();
        } else {
          super.moveLeft();
        }
      }
}