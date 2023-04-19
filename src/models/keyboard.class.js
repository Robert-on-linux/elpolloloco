
class Keyboard {
  LEFT = false;
  RIGHT = false;
  UP = false;
  SPACE = false;
  d = false;
  m = false;
  ESC = false


  constructor() {
    this.eventKeyboard();
    // this.eventTouchpad();
  }

  //KEYBOARD

  eventKeyboard() {
    this.checkKeysArePressed();
    this.checkKeysAreReleased();
  }

  checkKeysArePressed() {
    window.addEventListener("keydown", (event) => {
      if (event.key == "ArrowRight") {
        keyboard.RIGHT = true;
      }

      if (event.key == "ArrowLeft") {
        keyboard.LEFT = true;
      }

      if (event.key == "ArrowUp") {
        keyboard.UP = true;
      }

      if (event.key == "ArrowDown") {
        keyboard.DOWN = true;
      }

      if (event.key == " ") {
        keyboard.SPACE = true;
      }

      if (event.key == "d") {
        keyboard.d = true;
      }

      if (event.key == "m") {
        keyboard.m = true;
      }

      if (event.key == "Escape") {
        keyboard.ESC = true;
        location.reload();
      }

    });
  }

  checkKeysAreReleased() {
    window.addEventListener("keyup", (event) => {
      if (event.key == "ArrowRight") {
        keyboard.RIGHT = false;
      }

      if (event.key == "ArrowLeft") {
        keyboard.LEFT = false;
      }

      if (event.key == "ArrowUp") {
        keyboard.UP = false;
      }

      if (event.key == "ArrowDown") {
        keyboard.DOWN = false;
      }

      if (event.key == " ") {
        keyboard.SPACE = false;
      }

      if (event.key == "d") {
        keyboard.d = false;
      }

      if (event.key == "m") {
        keyboard.m = false;
      }

      if (event.key == "Escape") {
        keyboard.ESC = false;
        location.reload();
      }


    });
  }

  //BUTTONS IN MOBILE VIEW

  // eventTouchpad() {
  //   this.checkButtonsArePressed();
  //   this.checkButtonsAreReleased();
  // }

  // checkButtonsArePressed() {
  //   setTimeout(() => {
  //     document
  //       .getElementById("btnLeft")
  //       .addEventListener("touchstart", (event) => {
  //         event.preventDefault();
  //         this.LEFT = true;
  //       });
  //     document
  //       .getElementById("btnRight")
  //       .addEventListener("touchstart", (event) => {
  //         event.preventDefault();
  //         this.RIGHT = true;
  //       });

  //     document
  //       .getElementById("btnUp")
  //       .addEventListener("touchstart", (event) => {
  //         event.preventDefault();
  //         this.UP = true;
  //       });

  //     document
  //       .getElementById("btnBottle")
  //       .addEventListener("touchstart", (event) => {
  //         event.preventDefault();
  //         this.SPACE = true;
  //       });
  //   }, 500);
  // }

  // checkButtonsAreReleased() {
  //   setTimeout(() => {
  //     document
  //       .getElementById("btnLeft")
  //       .addEventListener("touchend", (event) => {
  //         event.preventDefault();
  //         this.LEFT = false;
  //       });
  //     document
  //       .getElementById("btnRight")
  //       .addEventListener("touchend", (event) => {
  //         event.preventDefault();
  //         this.RIGHT = false;
  //       });

  //     document.getElementById("btnUp").addEventListener("touchend", (event) => {
  //       event.preventDefault();
  //       this.UP = false;
  //     });

  //     document
  //       .getElementById("btnBottle")
  //       .addEventListener("touchend", (event) => {
  //         event.preventDefault();
  //         this.SPACE = false;
  //       });
  //   }, 500);
  // }
}
