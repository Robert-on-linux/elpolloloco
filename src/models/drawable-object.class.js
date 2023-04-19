class DrawableObject {



    // x = 100;
    // y = 450;
    // y = 250;

    // width = 100;
    // height = 150;
    
    img;
    imageCache = {};
    current_Image = 0;

    loadImage(path) {
        this.img = new Image(); 
        this.img.src = path;
    }

    loadImages(array) {
        array.forEach((path) => {
          let img = new Image();
          img.src = path;
          this.imageCache[path] = img;
        });
      }
    
    draw(ctx) {
        try {
          ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
          // ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (error) {
          // console.warn("Image could not loaded", error);
          // console.log(this.img.src);
         }
      }
    
      /**
       * This function supports colliding development
       *
       */
    //   drawFrame(ctx) {
    //     if (this.isCorrectObject()) {
    //       this.frameGetsDrawed(ctx);
    //     }
    //   }
    
      // isCorrectObject() {
      //   return (
      //     this instanceof Character ||
      //     this instanceof Chicken ||
      //     this instanceof Endboss
      //   );
      // }
    
    //   frameGetsDrawed(ctx) {
    //     ctx.beginPath();
    //     ctx.lineWidth = "3";
    //     ctx.strokeStyle = "blue";
    //     ctx.rect(this.x, this.y, this.width, this.height);
    //     ctx.stroke();
    //   }

}




