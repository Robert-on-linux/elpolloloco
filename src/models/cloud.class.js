class Cloud extends MoveableObject {

    y = 25;
    height = 250;
    width = 500;

    IMAGES_MOVING = [
        './src/img/5_background/layers/4_clouds/1.png'
    ]

    constructor(x) {
        super().loadImage(this.IMAGES_MOVING[0]);
        this.x = (Math.random() * 500) + x;
        this.speed = 0.01 + (Math.random() * .3);
        this.loadImages(this.IMAGES_MOVING);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_MOVING);
        }, 200);
    }
}