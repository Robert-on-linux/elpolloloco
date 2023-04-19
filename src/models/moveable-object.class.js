class MoveableObject extends DrawableObject {

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    ground = 275;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1.5;

    y = 170;
    lookLeftside = false;

    energy = 100;
    lastHit = 0;
    lastAction;


    // ---- Animation  thru IMAGES_Array -----

    playAnimation(images) {
        let i = this.current_Image % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.current_Image++;
    };


    // ----- Energy calculating -------

    hit() {
        this.subtractEnergy();
        if (!this.isDead()) {
            this.lastHit = new Date().getTime();
            this.lastAction = new Date().getTime();
        }
    }

    subtractEnergy() {
        this.energy -= 30;
    }

    wasHit() {
        return this.energy < 100;
    };

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < .5;
    };

    isHurting() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    };

    isDead() {
        return (this.energy <= 0);
    };

    // -------- Moving -------------------

    cannotMove() {
        return (this.speed = 0);
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    jump() {
        this.speedY = 20;
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else return this.y < this.ground;
    };

    isAtStart() {
        return this.x <= 0;
    };

    isAsleep() {
        let timePassed = new Date().getTime() - this.lastAction;
        timePassed = timePassed / 1000;
        return timePassed > 5;
    }


    // ---- Colliding objects

    isColliding(mo) {
        return ((this.x + this.width - this.offset.right) > (mo.x + mo.offset.left) &&  // right to left collision
            (this.y + this.height - this.offset.bottom) > (mo.y + mo.offset.top) &&     // top to bottom collision
            (this.x + this.offset.left) < (mo.x + mo.width - mo.offset.right) &&        // left to right collision
            (this.y + this.offset.top) < (mo.y + mo.height - mo.offset.bottom)          // bottom to top collision
        )
    };


    // ---- Gravity (jump & bottle) ----

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
                if (this instanceof Character && this.y - this.speedY > this.ground) {
                    this.speedY = (this.ground - this.y) * -1;
                }
            }
        }, 40);
    };

};
