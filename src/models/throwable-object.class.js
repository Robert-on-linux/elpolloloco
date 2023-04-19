class ThrowableObject extends MoveableObject {

    height = 60;
    width = 50;
    // bottleCollision = false;

    speedY = 15;
    speedX = 10;
    acceleration = 2;
    splash = false;


    IMAGES_BOTTLE_ROTATION = [
        '/src/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        '/src/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        '/src/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        '/src/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    IMAGES_BOTTLE_SPLASH = [
        '/src/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        '/src/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        '/src/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        '/src/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        '/src/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        '/src/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];


    throw_sound = new Audio('/src/audio/bottle.mp3');


    constructor(x, y) {
        super().loadImage('/src/img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.IMAGES_BOTTLE_ROTATION);
        this.loadImages(this.IMAGES_BOTTLE_SPLASH);
        this.x = x;
        this.y = y;
        this.animate();
        this.throw();
    };

    animate() {
        setInterval(() => {
            if (this.splash) {
                this.playAnimation(this.IMAGES_BOTTLE_SPLASH);
            } else {
                this.playAnimation(this.IMAGES_BOTTLE_ROTATION);
            }
        }, 100);
    };


    throw() {
        this.applyGravity();
        setInterval(() => {
            this.x += this.speedX;
        }, 25);
    };


    hitGround() {
        return this.y > 270; 
    };

    /**
     * This function is called when an object is thrown.
     * The object will be thrown in the direction of the character and will be rotated.
     * After a certain time the object will splash.
     */
    // throw() {
    //     this.speedY = 20;
    //     this.applyGravity();
    //     setInterval(() => {
    //         this.x += 10;
    //     }, 50);
    // }


}