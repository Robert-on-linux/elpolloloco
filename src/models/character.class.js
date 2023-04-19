class Character extends MoveableObject {

    offset = {
        top: 50,
        bottom: 5,
        left: 0,
        right:0,
    };

    height = 150;
    width = 100;
    y = 275; // 175
    x = 80;

    speed = 4;
    speedY = 0;

    collectedBottles = 0;
    collectedCoins = 0;
    
    getsPushed = false;
    world;
    
    walking_sound = new Audio('./src/audio/running.mp3');
    currentImage = 0;

    IMAGE_STANDING = [
        './src/img/2_character_pepe/1_idle/idle/I-1.png'
    ];

    IMAGES_IDLE = [
        './src/img/2_character_pepe/1_idle/long_idle/I-11.png',
        './src/img/2_character_pepe/1_idle/long_idle/I-12.png',
        './src/img/2_character_pepe/1_idle/long_idle/I-13.png',
        './src/img/2_character_pepe/1_idle/long_idle/I-14.png',
        './src/img/2_character_pepe/1_idle/long_idle/I-15.png',
        './src/img/2_character_pepe/1_idle/long_idle/I-16.png',
        './src/img/2_character_pepe/1_idle/long_idle/I-17.png',
        './src/img/2_character_pepe/1_idle/long_idle/I-18.png',
        './src/img/2_character_pepe/1_idle/long_idle/I-19.png',
        './src/img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];

    IMAGES_WALKING = [
        './src/img/2_character_pepe/2_walk/W-21.png',
        './src/img/2_character_pepe/2_walk/W-22.png',
        './src/img/2_character_pepe/2_walk/W-23.png',
        './src/img/2_character_pepe/2_walk/W-24.png',
        './src/img/2_character_pepe/2_walk/W-25.png',
        './src/img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_JUMPING = [
        'src/img/2_character_pepe/3_jump/J-31.png',
        'src/img/2_character_pepe/3_jump/J-32.png',
        'src/img/2_character_pepe/3_jump/J-33.png',
        'src/img/2_character_pepe/3_jump/J-34.png',
        'src/img/2_character_pepe/3_jump/J-35.png',
        'src/img/2_character_pepe/3_jump/J-36.png',
        'src/img/2_character_pepe/3_jump/J-37.png',
        'src/img/2_character_pepe/3_jump/J-38.png',
        'src/img/2_character_pepe/3_jump/J-39.png'
    ];

    IMAGES_DEAD = [
        'src/img/2_character_pepe/5_dead/D-51.png',
        'src/img/2_character_pepe/5_dead/D-52.png',
        'src/img/2_character_pepe/5_dead/D-53.png',
        'src/img/2_character_pepe/5_dead/D-54.png',
        'src/img/2_character_pepe/5_dead/D-55.png',
        'src/img/2_character_pepe/5_dead/D-56.png',
        'src/img/2_character_pepe/5_dead/D-57.png',
    ]

    IMAGES_HURT = [
        'src/img/2_character_pepe/4_hurt/H-41.png',
        'src/img/2_character_pepe/4_hurt/H-42.png',
        'src/img/2_character_pepe/4_hurt/H-43.png',
    ]


    constructor() {
        super().loadImage('/src/img/2_character_pepe/2_walk/W-21.png')
        this.loadImages(this.IMAGE_STANDING);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
        this.applyGravity();
    }


    animate() {
        setInterval(() => {
            this.moveCharacter();
            this.checkIfGetsPushed();
            this.world.camera_x = -this.x + 80;
        }, 1000 / 60);
        setInterval(() => this.playCharacter(), 100);
    };

    //MOVE THE CHARACTER

    moveCharacter() {
        pauseAudio("characterWalk");
        if (this.canMoveRight()) {
            this.moveRight();
        }
        if (this.canMoveLeft()) {
            this.moveLeft();
        }
        if (this.canJump()) {
            this.jump();
        }
    }

    canMoveRight() {
        return (
            this.world.keyboard.RIGHT &&
            this.x <= this.world.endboss.x &&
            !this.getsPushed
        );
    }

    moveRight() {
        super.moveRight();
        this.lastAction = new Date().getTime();
        this.lookLeftside = false;
        this.offset.right = 20;
        playAudio("characterWalk");
    }

    canMoveLeft() {
        return this.world.keyboard.LEFT && this.x > 0 && !this.getsPushed;
    }

    moveLeft() {
        super.moveLeft();
        this.lastAction = new Date().getTime();
        this.lookLeftside = true;
        this.offset.right = 60;
        playAudio("characterWalk");
    }

    canJump() {
        return this.world.keyboard.SPACE && !this.isAboveGround();
    }

    jump() {
        if (this.isAboveGround()) {
            this.smallJump(); //when killing enemy
        } else {
            super.jump();
        }
        this.lastAction = new Date().getTime();
        playAudio("characterJump");
    }

    smallJump() {
        this.speedY = 15;
    }


    //PUSHING OF ENDBOSS

    checkIfGetsPushed() {
        if (this.getsPushedNearStart()) {
            this.pushToStart();
        } else if (this.getsPushedFarFromStart()) {
            this.pushWithFullPower();
        }
    }

    getsPushedNearStart() {
        return this.getsPushed && this.x < this.world.endboss.powerOfPushing;
    }

    pushToStart() {
        return (this.x -= this.x);
    }

    getsPushedFarFromStart() {
        return this.getsPushed;
    }

    pushWithFullPower() {
        this.x -= this.world.endboss.powerOfPushing;
        setTimeout(() => {
            this.getsPushed = false;
        }, 100);
    }

    //ANIMATION

    playCharacter() {
        pauseAudio("characterSnore");
        if (gameIsOver && this.energy > 0) {
            this.playAnimation(this.IMAGE_STANDING);
        } else if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
        } else if (this.isHurting()) {
            this.playAnimation(this.IMAGES_HURT);
        } else if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMPING);
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_WALKING);
        } else if (this.isAsleep()) {
            this.playAnimation(this.IMAGES_IDLE);
            playAudio("characterSnore");
        } else {
            this.playAnimation(this.IMAGE_STANDING);
        }
    }

}
