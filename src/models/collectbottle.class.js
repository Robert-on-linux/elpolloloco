class Collectbottle extends DrawableObject {
  offset = {
    top: 10,
    bottom: 0,
    left: 20,
    right: 20,
  };
  
  width = 45;
  height = 45;

  constructor(path,x, y) {
    super().loadImage(path);
    this.x = x;
    this.y = y;
  }

}