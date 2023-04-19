class Chicken extends MoveableObject {

    offset = {
        top: 5,
        bottom: 5,
        left: 25,
        right:15,
    };

    height = 50;
    width = 40;

    y = 370;

    IMAGES_WALKING = [
        '/src/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '/src/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '/src/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        '/src/img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    currentImage = 0;

    constructor() {
        super().loadImage('/src/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
        this.x = 500 + (Math.random() * 500);
        this.speed = 0.15 + (Math.random() * 0.25);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft()
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimationChicken(this.IMAGES_WALKING)
        }, 200);
    }

    playAnimationChicken() {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
        } else {
            this.playAnimation(this.IMAGES_WALKING);
        }
    }

}

