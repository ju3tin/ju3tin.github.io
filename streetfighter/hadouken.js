class Hadouken {
  constructor(ctx, startPointX) {
    this.ctx = ctx;
    this.handPosition = 60;
    this.startPointX = startPointX + this.handPosition;
    this.startPointY = 200;
    this.yFrameAdjuster = 2.5;
    

    // Idle Image
    this.imgHadou = new Image();
    this.imgHadou.src = "./img/hadouken.png";
    this.hadouX = 68;
    this.hadouY = 40;
    this.imgHadou.frames = 2;
    this.imgHadou.frameIndex = 0;

    // Impact Image
    this.imgHadouImpact = new Image();
    this.imgHadouImpact.src = "./img/hadouken-impact.png";
    this.hadouImpactX = 84;
    this.hadouImpactY = 40;
    this.imgHadouImpact.frames = 4;
    this.imgHadouImpact.frameIndex = 0;
  }

  drawMoving(framesCounter) {
    this.ctx.drawImage(
      this.imgHadou,
      this.imgHadou.frameIndex * Math.floor(this.hadouX / this.imgHadou.frames),
      0,
      Math.floor(this.hadouX / this.imgHadou.frames),
      this.hadouY,
      this.startPointX += 3.5,
      this.startPointY,
      this.hadouX,
      this.hadouY * this.yFrameAdjuster
    );

    this.animateImgMoving(framesCounter);
  }

  animateImgMoving(framesCounter) {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (framesCounter % 30 === 0) {
      this.imgHadou.frameIndex += 1;

      // Si el frame es el último, se vuelve al primero
      if (this.imgHadou.frameIndex > 1) this.imgHadou.frameIndex = 0;
    }
  }

  drawImpact(framesCounter) {
    this.ctx.drawImage(
      this.imgHadouImpact,
      this.imgHadouImpact.frameIndex * Math.floor(this.hadouImpactX / this.imgHadouImpact.frames),
      0,
      Math.floor(this.hadouImpactX / this.imgHadouImpact.frames),
      this.hadouImpactY,
      this.startPointX,
      this.startPointY,
      this.hadouImpactX,
      this.hadouImpactY * this.yFrameAdjuster
    );

    this.animateImgImpact(framesCounter);
  }

  animateImgImpact(framesCounter) {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (framesCounter % 30 === 0) {
      this.imgHadouImpact.frameIndex += 1;

      // Si el frame es el último, se vuelve al primero
      if (this.imgHadouImpact.frameIndex > 1) this.imgHadou.frameIndex = 0;
    }
  }

  reset(startPointPlayer) {
    this.startPointX =  startPointPlayer;
  }
}


class Kikouken {
    constructor(ctx, startPointX) {
      this.ctx = ctx;
      this.handPosition = -1;
      this.startPointX = startPointX + this.handPosition;
      this.startPointY = 200;
      this.yFrameAdjuster = 2.5;      
  
      // Idle Image
      this.imgKikou = new Image();
      this.imgKikou.src = "./img/kikouken.png";
      this.kikouX = 280;
      this.kikouY = 40;
      this.imgKikou.frames = 7;
      this.imgKikou.frameIndex = 6;
  
      // Impact Image
      // this.imgKikouImpact = new Image();
      // this.imgKikouImpact.src = "./img/kikouken-impact.png";
      // this.kikouImpactX = 84;
      // this.kikouImpactY = 40;
      // this.imgKikouImpact.frames = 4;
      // this.imgKikouImpact.frameIndex = 0;
    }
  
    drawMoving(framesCounter) {
      this.ctx.drawImage(
        this.imgKikou,
        this.imgKikou.frameIndex * Math.floor(this.kikouX / this.imgKikou.frames),
        0,
        Math.floor(this.kikouX / this.imgKikou.frames),
        this.kikouY,
        this.startPointX -= 3.5,
        this.startPointY,
        this.kikouX / 2,
        this.kikouY * this.yFrameAdjuster
      );
  
      this.animateImgMoving(framesCounter);
    }
  
    animateImgMoving(framesCounter) {
      // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
      if (framesCounter % 10 === 0) {
        this.imgKikou.frameIndex -= 1;
  
        // Si el frame es el último, se vuelve al primero
        if (this.imgKikou.frameIndex < 0) this.imgKikou.frameIndex = 6;
      }
    }
  
    // drawImpact(framesCounter) {
    //   this.ctx.drawImage(
    //     this.imgHadouImpact,
    //     this.imgHadouImpact.frameIndex * Math.floor(this.hadouImpactX / this.imgHadouImpact.frames),
    //     0,
    //     Math.floor(this.hadouImpactX / this.imgHadouImpact.frames),
    //     this.hadouImpactY,
    //     this.startPointX,
    //     this.startPointY,
    //     this.hadouImpactX,
    //     this.hadouImpactY * this.yFrameAdjuster
    //   );
  
    //   this.animateImgImpact(framesCounter);
    // }
  
    // animateImgImpact(framesCounter) {
    //   // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    //   if (framesCounter % 30 === 0) {
    //     this.imgHadouImpact.frameIndex += 1;
  
    //     // Si el frame es el último, se vuelve al primero
    //     if (this.imgHadouImpact.frameIndex > 1) this.imgHadou.frameIndex = 0;
    //   }
    // }
  
    reset(startPointPlayer) {
      this.startPointX =  startPointPlayer;
    }
  }