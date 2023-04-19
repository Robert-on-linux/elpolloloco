class World {

  canvas;
  ctx;
  // keyboard;
  // percentage;
  // currentLevel;
  camera_x = 0;
  character = new Character();
  endboss = new Endboss();
  statusBar = new StatusBar();
  statusBarCoin = new StatusBarCoin();
  statusBarBottle = new StatusBarBottle();
  statusBarEndboss = new StatusBarEndboss();
  statusBarEndbossLife = new StatusBarEndbossLife();
  throwableObjects = [];

  // bottlesplash_sound = new Audio('./src/audio/bottle.mp3');

  constructor(canvas, keyboard, currentLevel) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.currentLevel = currentLevel;
    this.draw();
    this.setWorld();
    this.run();
    playAudio("background");
  }

  setWorld() {
    this.character.world = this;
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  addObjectsToMap(objects) {
    objects.forEach(mo => { this.addToMap(mo); });
  }

  addToMap(mo) {

    if (this.turnObject(mo)) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    if (this.turnObject(mo)) {
      this.flipImageBack(mo);
    }
  };

  turnObject(mo) {
    return mo.lookLeftside;
  }


  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }


  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }


  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.currentLevel.backgroundObjects);
    this.addObjectsToMap(this.currentLevel.clouds);
    this.addObjectsToMap(this.currentLevel.bottles);
    this.ctx.translate(-this.camera_x, 0);

    // --------- Space for fixed Object -----------
    this.addToMap(this.statusBarEndboss);
    this.addToMap(this.statusBarEndbossLife);
    this.addToMap(this.statusBar);
    this.addToMap(this.statusBarCoin);
    this.addToMap(this.statusBarBottle);
    this.ctx.translate(this.camera_x, 0);

    this.addToMap(this.character);
    this.addToMap(this.endboss);
    this.addObjectsToMap(this.currentLevel.enemies);
    this.addObjectsToMap(this.throwableObjects);
    this.addObjectsToMap(this.currentLevel.bottles);
    this.addObjectsToMap(this.currentLevel.coins);
    this.ctx.translate(-this.camera_x, 0);

    // Draw() wird immer aufgerufen
    let self = this;

    requestAnimationFrame(() => { self.draw(); });
  }

  // ---- run interval --------

  run() {
    let interval = setInterval(() => {
      this.checkCharacterCollidesEnemy();
      this.checkAppearanceEndboss();
      this.checkEndbossHurtingCharacter();
      this.checkEndbossPushingCharacter();
      this.checkCharacterCollectsCoins();
      this.checkCharacterCollectsBottle();
      this.checkCharacterThrowsBottles();
      this.checkBottleHurtingEndboss();
      this.checkBottleIsSmashed();
      this.checkIfWonOrLost();
      this.checkEscKey();
      this.muteUnmute();
    }, 100);
    intervalID.push(interval);
  }


  // ---- all chicken

  checkCharacterCollidesEnemy() {
    this.currentLevel.enemies.forEach((enemy) => {
      if (this.characterJumpsOnTop(enemy)) {
        this.enemieGetsKilled(enemy);
      }
      if (this.enemieCanHurtCharacter(enemy)) {
        this.characterGetsHurt();
      }
    });
  }

  characterJumpsOnTop(enemy) {
    return (
      !this.character.isHurt() &&
      this.character.isColliding(enemy) &&
      this.character.isAboveGround() &&
      this.character.speedY < 0
    );
  }

  enemieGetsKilled(enemy) {
    let indexEnemy = this.currentLevel.enemies.indexOf(enemy);
    // let hittedEnemy = (this.currentLevel.enemies[indexEnemy].energy = 0);
    setTimeout(() => {
      this.currentLevel.enemies.splice(indexEnemy, 1);
    }, 100);
    this.character.jump();
    playAudio("chickenHit");
  }

  enemieCanHurtCharacter(enemy) {
    return (
      this.character.isColliding(enemy) &&
      !this.character.isHurt() &&
      !this.character.isAboveGround() &&
      !this.character.isUnstoppable
    );
  }

  characterGetsHurt() {
    this.character.hit();
    this.statusBar.setPercentage(this.character.energy);
    playAudio("characterHurt");
  }

  // ---------------------- BOSS

  checkAppearanceEndboss() {
    if (this.characterReachesEndboss()) {
      this.activatingEndboss();
    } else {
      this.hideStatusBarOfEndboss();
    }
  }

  characterReachesEndboss() {
    return this.endboss.x - this.character.x < 450;
  }


  activatingEndboss() {
    this.statusBarEndboss.width = 200;
    this.statusBarEndboss.height = 60;
    this.statusBarEndbossLife.width = 70;
    this.statusBarEndbossLife.height = 75;
    this.endboss.isAttention = true;
    pauseAudio("background");
    playAudio("endboss");
  }

  hideStatusBarOfEndboss() {
    this.statusBarEndboss.width = 0;
    this.statusBarEndboss.height = 0;
    this.statusBarEndbossLife.width = 0;
    this.statusBarEndbossLife.height = 0;
  }

  // ------ Endboss hurts character

  checkEndbossHurtingCharacter() {
    if (this.endbossCanHurtCharacter()) {
      this.characterGetsHurt();
    }
  }

  endbossCanHurtCharacter() {
    return (
      !this.character.isHurt() && this.character.isColliding(this.endboss)
    );
  }


  // Endboss kills character

  checkEndbossPushingCharacter() {
    if (this.endbossCollidesCharacter()) {
      this.characterGetsPushed();
    } else {
      this.characterGetsNotPushed();
    }
  }

  endbossCollidesCharacter() {
    return this.character.isColliding(this.endboss);
  }

  characterGetsPushed() {
    this.character.getsPushed = true;
  }

  characterGetsNotPushed() {
    this.character.getsPushed = false;
  }


  // ---- collecting coins

  checkCharacterCollectsCoins() {
    this.currentLevel.coins.forEach((coin) => {
      if (this.characterCollidesCoin(coin)) {
        this.coinGetsCollected(coin);
      }
    });
  }

  characterCollidesCoin(coin) {
    return this.character.isColliding(coin) && !this.character.isHurt();
  }

  coinGetsCollected(coin) {
    this.character.collectedCoins++;
    this.statusBarCoin.setPercentage(this.character.collectedCoins);
    this.currentLevel.coins.splice(this.currentLevel.coins.indexOf(coin), 1);
    playAudio("coinCollected");
  }

  // ----- collecting bottles


  checkCharacterCollectsBottle() {
    this.currentLevel.bottles.forEach((bottle) => {
      if (this.characterCollidesBottle(bottle)) {
        this.bottleGetsCollected(bottle);
      }
    });
  }

  characterCollidesBottle(bottle) {
    return this.character.isColliding(bottle) && !this.character.isHurt();
  }

  bottleGetsCollected(bottle) {
    this.character.collectedBottles++;
    // console.log('this.character.collectedBottles++', this.character.collectedBottles);
    this.statusBarBottle.setPercentage(this.character.collectedBottles);
    // console.log('this.currentLevel.bottles', this.currentLevel.bottles);
    this.currentLevel.bottles.splice(this.currentLevel.bottles.indexOf(bottle), 1);
    playAudio("bottleCollected");
  }


  // ---- throwing bottles

  checkCharacterThrowsBottles() {
    if (this.characterCanThrowBottles()) {
      this.bottlesGetThrown();
    }
  }

  characterCanThrowBottles() {
    return (
      this.keyboard.d &&
      !this.character.lookLeftside &&
      !this.character.isHurt() &&
      this.character.collectedBottles > 0
    );
  }

  bottlesGetThrown() {
    this.character.lastAction = new Date().getTime();
    this.character.collectedBottles--;
    this.statusBarBottle.setPercentage(this.character.collectedBottles);
    let bottle = new ThrowableObject(
      this.character.x + this.character.width + 10,
      this.character.y + 5
    );
    this.throwableObjects.push(bottle);
  }

  //   -------- hurt endboss with bottle

  checkBottleHurtingEndboss() {
    this.throwableObjects.forEach((bottle) => {
      if (this.bottleCollidesEndboss(bottle)) {
        this.endbossGetsHurt();
      }
    });
  }

  bottleCollidesEndboss(bottle) {
    return this.endboss.isColliding(bottle) && !this.endboss.isHurt();
  }

  endbossGetsHurt() {
    this.endboss.isAttention = false;
    this.endboss.hit();
    this.statusBarEndboss.setPercentage(this.endboss.energy);
    playAudio("chickenHit");
  }

  //  ----------------- smashing bottle

  checkBottleIsSmashed() {
    this.throwableObjects.forEach((bottle) => {
      if (this.bottleCollidesBottomOrEndboss(bottle)) {
        this.clearBottle(bottle);
      }
    });
  }

  bottleCollidesBottomOrEndboss(bottle) {
    return bottle.hitGround() || this.endboss.isColliding(bottle);
  }

  clearBottle(bottle) {
    bottle.isSmashed = true;
    playAudio("bottleSmashed");
    setTimeout(() => {
      this.throwableObjects.splice(this.throwableObjects.indexOf(bottle), 1);
    }, 100);
  }

  // ------------- GAME OVER -----

  checkIfWonOrLost() {
    if (this.characterDied()) {
      this.showGameLost();
      this.changeStyleForEndscreen();
      this.stopAudiosAndInterval();
    }
    if (this.endbossDied()) {
      this.showGameWon();
      this.changeStyleForEndscreen();
      this.stopAudiosAndInterval();
    }
  }

  characterDied() {
    return this.character.energy <= 0 && !this.gameIsOver;
  }

  showGameLost() {
    gameIsOver = true;
    document.getElementById("gameoverimgId").src =
      "./src/img/9_intro_outro_screens/game_over/oh_no_you_lost!.png";
    pauseAudio("endboss");
    playAudio("gameLost");
  }

  endbossDied() {
    return this.endboss.energy <= 0 && !this.gameIsOver;
  }

  showGameWon() {
    gameIsOver = true;
    document.getElementById("gameoverimgId").src =
      "./src/img/9_intro_outro_screens/game_over/game_over!.png";
    pauseAudio("endboss");
    playAudio("gameWon");
  }

  changeStyleForEndscreen() {
    document.getElementById("gameoverId").classList.remove("d-none");
    // document.getElementById("mobileWalk").classList.add("d-none");
    // document.getElementById("mobileActions").classList.add("d-none");
  }

  stopAudiosAndInterval() {
    pauseAudio("endboss");
    pauseAudio("background");
    stopInterval();
  }

  checkEscKey() {
    if (this.keyboard.ESC) {
      location.reload();
    }
  }

  muteUnmute() {
    if (this.keyboard.m) {
      toggleMute();
    }
  }
}

