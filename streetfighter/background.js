class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "./img/bg/kenbg.png";

    // this.imgred = new Image();
    // this.imgred.src = "./img/bg/kenbg1200.png"

    // this.x = 0;
    // this.y = 0;
  }

  draw() {
    this.ctx.drawImage(this.img, 340, 368, 1000, 308, 0, 0, 1000, 310);
    // this.ctx.drawImage(this.imgred, 10, 34, 691, 229, 0, 0, 691, 229);
    this.ctx.drawImage(this.img, 111, 43, 815, 317, 0, 0, 815, 317);
    this.ctx.drawImage(this.img, 340, 688, 1000, 127, 0, 307, 1000, 133);
  }
}

class BackMoves extends Background {
  constructor(ctx) {
    super(ctx);

    this.imgbluesir = new Image();
    this.imgbluesir.src = "./img/bg/bluesirmove.png";
    this.blueSirDimensionsX = 82;
    this.blueSirDimensionsY = 291;
    this.imgbluesir.frames = 3;
    this.imgbluesir.frameIndex = 0;
  }

  draw(framesCounter) {
    this.ctx.drawImage(
      this.imgbluesir,
      0,
      this.imgbluesir.frameIndex *
        Math.floor(this.blueSirDimensionsY / this.imgbluesir.frames),
      this.blueSirDimensionsX,
      Math.floor(this.blueSirDimensionsY / this.imgbluesir.frames),
      409,
      167.5,
      this.blueSirDimensionsX,
      this.blueSirDimensionsY / this.imgbluesir.frames
    );

    this.animateImg(framesCounter);
  }

  animateImg(framesCounter) {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (framesCounter % 20 === 0) {
      this.imgbluesir.frameIndex += 1;

      // Si el frame es el último, se vuelve al primero
      if (this.imgbluesir.frameIndex > 2) this.imgbluesir.frameIndex = 0;
    }
  }
}
// void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
