class Player1 {
  constructor(ctx, keys) {
    this.ctx = ctx;
    this.keys = keys;
    this.states = {
      left: false,
      right: false,
      punch: false,
      kick: false,
      hadouken: false
    };
    this.startPointX = 200;
    this.startPointY = 150;
    this.separator = 65
    this.yFrameAdjuster = 2.5;
    this.life = 100;
    this.victory = false;

    if (this.startPointX === 0) {
      this.startPoint += 1
    }

    // Idle Image
    this.imgIdlep1 = new Image();
    this.imgIdlep1.src = "./img/ken_idle.png";
    this.kenIdleX = 188;
    this.kenIdleY = 92;
    this.imgIdlep1.frames = 4;
    this.imgIdlep1.frameIndex = 0;

    // Walk Image
    this.imgWalkp1 = new Image();
    this.imgWalkp1.src = "./img/ken_walk.png";
    this.kenWalkX = 235;
    this.kenWalkY = 92;
    this.imgWalkp1.frames = 5;
    this.imgWalkp1.frameIndex = 0;

    // Hadouken Image
    this.imgHadoup1 = new Image();
    this.imgHadoup1.src = "./img/ken_hadouken.png";
    this.kenHadouX = 288;
    this.kenHadouY = 92;
    this.imgHadoup1.frames = 4;
    this.imgHadoup1.frameIndex = 0;

    // Die Image
    this.imgDiep1 = new Image();
    this.imgDiep1.src = "./img/ken_die.png";
    this.kenDieX = 468;
    this.kenDieY = 92;
    this.imgDiep1.frames = 6;
    this.imgDiep1.frameIndex = 0;

    // Victory Image
    this.imgVictoryp1 = new Image();
    this.imgVictoryp1.src = "./img/ken_victory.png";
    this.kenVictoryX = 192;
    this.kenVictoryY = 92;
    this.imgVictoryp1.frames = 4;
    this.imgVictoryp1.frameIndex = 0;
 }

  draw(framesCounter) {
    if (this.states.left || this.states.right) {
      this.drawWalk(framesCounter);
    } else if (this.states.hadouken) {
      this.drawHadouken(framesCounter);
        setTimeout(() => {
          this.states.hadouken = false
          this.imgHadoup1.frameIndex = 0
        }, 600 )
    } else if (this.life <= 0) {
      this.drawDie(framesCounter)
    } else if (this.victory){
      this.drawVictory(framesCounter)
    }
    else {
      this.drawIdle(framesCounter);
    }
  }

  drawIdle(framesCounter) {
    this.ctx.drawImage(
      this.imgIdlep1,
      this.imgIdlep1.frameIndex *
        Math.floor(this.kenIdleX / this.imgIdlep1.frames),
      0,
      Math.floor(this.kenIdleX / this.imgIdlep1.frames),
      this.kenIdleY,
      this.startPointX,
      this.startPointY,
      this.kenIdleX / 1.5,
      this.kenIdleY * this.yFrameAdjuster
    );

    
    this.animateImgIdle(framesCounter);
  }

  animateImgIdle(framesCounter) {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (framesCounter % 10 === 0) {
      this.imgIdlep1.frameIndex += 1;

      // Si el frame es el último, se vuelve al primero
      if (this.imgIdlep1.frameIndex > 2) this.imgIdlep1.frameIndex = 0;
    }
  }

  drawWalk(framesCounter) {
    this.ctx.drawImage(
      this.imgWalkp1,
      this.imgWalkp1.frameIndex *
        Math.floor(this.kenWalkX / this.imgWalkp1.frames),
      0,
      Math.floor(this.kenWalkX / this.imgWalkp1.frames),
      this.kenWalkY,
      this.startPointX,
      this.startPointY,
      this.kenWalkX / 2,
      this.kenWalkY * this.yFrameAdjuster
    );

    this.animateImgWalk(framesCounter);
  }

  animateImgWalk(framesCounter) {
    if (framesCounter % 10 === 0) {
      this.imgWalkp1.frameIndex += 1;

      if (this.imgWalkp1.frameIndex > 4) this.imgWalkp1.frameIndex = 0;
    }
  }

  drawHadouken(framesCounter) {

    this.ctx.drawImage(
      this.imgHadoup1,
      this.imgHadoup1.frameIndex *
        Math.floor(this.kenHadouX / this.imgHadoup1.frames),
      0,
      Math.floor(this.kenHadouX / this.imgHadoup1.frames),
      this.kenHadouY,
      this.startPointX,
      this.startPointY,
      this.kenHadouX / 1.5,
      this.kenHadouY * this.yFrameAdjuster
    )
    
    this.animateImgHadou(framesCounter);
  }

  animateImgHadou(framesCounter) {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (framesCounter % 10 === 0 && this.imgHadoup1.frameIndex < 4) {
      this.imgHadoup1.frameIndex += 1;

      // Si el frame es el último, se vuelve al primero
      if (this.imgHadoup1.frameIndex > 3) this.imgHadoup1.frameIndex = 0;

    }
  }

  drawDie(framesCounter) {
    this.ctx.save()
    this.ctx.drawImage(
      this.imgDiep1,
      this.imgDiep1.frameIndex *
        Math.floor(this.kenDieX / this.imgDiep1.frames),
      0,
      Math.floor(this.kenDieX / this.imgDiep1.frames),
      this.kenDieY,
      this.startPointX,
      this.startPointY +5,
      this.kenDieX / 2,
      this.kenDieY * this.yFrameAdjuster
    );
    this.ctx.translate(100, 0)
    this.ctx.restore()
    this.animateImgDie(framesCounter);
  }

  animateImgDie(framesCounter) {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (framesCounter % 20 === 0) {
      this.imgDiep1.frameIndex +=1;

      // Si el frame es el último, se vuelve al primero
      if (this.imgDiep1.frameIndex > 4) {
        this.imgDiep1.frameIndex = 5
       };
    }
  }

  drawVictory(framesCounter) {
    this.ctx.drawImage(
      this.imgVictoryp1,
      this.imgVictoryp1.frameIndex *
        Math.floor(this.kenVictoryX / this.imgVictoryp1.frames),
      0,
      Math.floor(this.kenVictoryX / this.imgVictoryp1.frames),
      this.kenVictoryY,
      this.startPointX,
      this.startPointY,
      this.kenVictoryX / 1.5,
      this.kenVictoryY * this.yFrameAdjuster
    );

    
    this.animateImgVictory(framesCounter);
  }

  animateImgVictory(framesCounter) {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (framesCounter % 30 === 0) {
      this.imgVictoryp1.frameIndex += 1;

      // Si el frame es el último, se vuelve al primero
      if (this.imgVictoryp1.frameIndex > 2) this.imgVictoryp1.frameIndex = 3;
    }
  }


  move() {
    if (this.states.left) {
      this.startPointX -= 3;
    }
    if (this.states.right) {
      this.startPointX += 3;
    }
  }
}

// void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

//   class kenMoves extends Player1 {
//       constructor(ctx) {
//           super(ctx)
//           this.imgWalkp1 = new Image()
//           this.imgpl1walk.src = "./img/ken_walk.png"
//           this.kenWalkX = 235
//           this.kenWalkY = 92
//           this.imgpl1walk.frames = 5
//           this.imgpl1walk.frameIndex = 0
//       }

//       draw(framesCounter) {
//         this.ctx.drawImage(
//           this.imgpl1walk,
//           this.imgpl1walk.frameIndex *
//             Math.floor(this.kenWalkX / this.imgpl1walk.frames),
//           0,
//           Math.floor(this.kenWalkX/ this.imgpl1walk.frames),
//           this.kenWalkY,
//           400,
//           150,
//           this.kenWalkX / 2,
//           this.kenWalkY * 2.5
//         );

//         this.animateImg(framesCounter);
//       }

//       animateImg(framesCounter) {
//         // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
//         if (framesCounter % 25 === 0) {
//           this.imgpl1walk.frameIndex += 1;

//           // Si el frame es el último, se vuelve al primero
//           if (this.imgpl1walk.frameIndex > 2) this.imgpl1walk.frameIndex = 0;
//         }
//       }
//   }
