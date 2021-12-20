var Game = {
  showHadouken: false,
  showKikouken: false,
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  keys: {
    player1left: 65,
    player1right: 68,
    // player1up: 87,
    // player1down: 83,
    player1hadouken: 81,
    // player1punch: 88,
    // player1kick: 67,

    player2left: 74,
    player2right: 76,
    // player2up: 38,
    // player2down: 40,
    player2hadouken: 73
    // player2punch: 79,
    // player2kick: 80,
  },
  fullLifeBar: "yellow",
  emptyLifeBar: "red",
  init: function(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext(`2d`);
    this.start();
  },

  start: function() {
    this.fps = 60;

    this.reset();
    playMusic();
    document.addEventListener("keydown", e => {
      if (e.keyCode === this.keys.player1hadouken) {
        playHadouken();
      }
      if (e.keyCode === this.keys.player2hadouken) {
        playKikouken();
      }
    });
    if (this.showHadouken || this.showKikouken) {
      playHit();
    }
    this.interval = setInterval(() => {
      // let intervalID = setInterval(() => {
      this.clear();
      this.framesCounter++;

      if (this.framesCounter > 1000) {
        this.framesCounter = 0;
      }
      
      this.listeners();
      this.drawAll();
      this.moveAll();

      if (this.player1.imgDiep1.frameIndex === 5) {
        this.player2.victory = true
        
      }
      if (this.player2.imgVictoryp2.frameIndex === 17)
      chunLaugh();
      if (this.player2.imgVictoryp2.frameIndex === 2) {
        chunYatta();
      }
      if (this.player2.imgDiep2.frameIndex === 0) {
          this.player1.victory = true
        }
      if (this.player1.imgVictoryp1.frameIndex === 3) {
        
        this.stop();
        stopMusic()
        playWin()
        this.drawKenWin()
      } else if (this.player2.imgVictoryp2.frameIndex === 0) {

        this.stop();
        stopMusic()
        playWin()
        this.drawChunWin()
      }
      console.log(this.lifeBar1y.currentLifePoints);
    }, 1000 / this.fps);
  },

  reset: function() {
    this.background = new Background(this.ctx);
    this.backgroundmoves = new BackMoves(this.ctx);
    this.player1 = new Player1(this.ctx, this.keys);
    this.player2 = new Player2(this.ctx, this.keys);
    this.hadouken = new Hadouken(this.ctx, this.player1.startPointX + 90);
    this.kikouken = new Kikouken(this.ctx, this.player2.startPointX);
    this.lifeBar1r = new LifeBarRed(this.ctx, 80, 15, this.emptyLifeBar, 100);
    this.lifeBar1y = new LifeBar(this.ctx, 80, 15, this.fullLifeBar, 100);
    this.lifeBar2r = new LifeBarRed(this.ctx, 600, 15, this.emptyLifeBar, 100);
    this.lifeBar2y = new LifeBar(this.ctx, 600, 15, this.fullLifeBar, 100);
    this.kWinImg = new KenWins(this.ctx);
    this.cWinImg = new ChunWins(this.ctx);
    this.framesCounter = 0;
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  drawAll: function() {
    this.background.draw(this.framesCounter);
    this.backgroundmoves.draw(this.framesCounter);
    this.player2.draw(this.framesCounter);
    this.player1.draw(this.framesCounter);

    // this.lifeBar2r.draw();
    this.lifeBar1r.draw();
    this.lifeBar1y.draw();
    this.lifeBar2r.draw();
    this.lifeBar2y.draw();

    // Hadouken appearing conditions
    if (this.showHadouken) {
      // this.hadouken.reset(this.player1.startPointX);
      this.hadouken.drawMoving(this.framesCounter);
    }

    if (this.showKikouken) {
      this.kikouken.drawMoving(this.framesCounter);
    }

    // Hadouken Impact conditions
    if (this.hadouken.startPointX >= this.player2.startPointX) {
      this.showHadouken = false;
      this.player2.life -= 20;
      this.lifeBar2y.reduceLife(20);
    }

    if (this.kikouken.startPointX <= this.player1.startPointX) {
      this.showKikouken = false;
      this.player1.life -= 20;
      this.lifeBar1y.reduceLife(20);
    }
    // Reset Hadouken next to player
    if (!this.showHadouken) {
      this.hadouken.reset(this.player1.startPointX);
    }
    if (!this.showKikouken) {
      this.kikouken.reset(this.player2.startPointX);
    }
  },

  moveAll: function() {
    this.player2.move();
    this.player1.move();
  },

  drawKenWin: function() {
    this.kWinImg.draw()
  },
  drawChunWin: function() {
    this.cWinImg.draw()
  },
  

  listeners: function() {
    document.addEventListener("keydown", e => {
      if (e.keyCode === this.keys.player2left) {
        this.player2.states.left = true;
      }
      if (e.keyCode === this.keys.player2right) {
        this.player2.states.right = true;
      }
      if (e.keyCode === this.keys.player1left) {
        this.player1.states.left = true;
        if (this.player1.startPointX < 0) {
          this.player1.startPointX = 1;
        }
      }
      if (
        e.keyCode === this.keys.player1right &&
        this.player1.startPointX + this.player1.separator <
          this.player2.startPointX
      ) {
        this.player1.states.right = true;
      }
      // if(e.keyCode === this.keys.player1hadouken) {
      //   this.player1.states.hadouken = true
      // }
      // if(e.keyCode === this.keys.player2hadouken) {
      //   this.player2.states.hadouken = true
      // }
    });
    document.addEventListener("keyup", e => {
      if (e.keyCode === this.keys.player2left) {
        this.player2.states.left = false;
      }
      if (e.keyCode === this.keys.player2right) {
        this.player2.states.right = false;
      }
      if (e.keyCode === this.keys.player1left) {
        this.player1.states.left = false;
      }
      if (e.keyCode === this.keys.player1right) {
        this.player1.states.right = false;
      }
      if (e.keyCode === this.keys.player1hadouken) {
        this.player1.states.hadouken = true;
        this.showHadouken = true;
      }
      if (e.keyCode === this.keys.player2hadouken) {
        this.player2.states.hadouken = true;
        this.showKikouken = true;
      }
    });
    if (this.player1.startPointX < 0) {
      this.player1.startPointX = 1;
    }

    if (
      this.player1.startPointX + this.player1.separator >
      this.player2.startPointX
    ) {
      this.player2.states.left = false;
      this.player1.states.right = false;
    }
    if (this.player2.startPointX > 840) {
      this.player2.startPointX = 840;
    }
    if (this.player2.life <= 0){
      this.player1.states.left = false
      this.player1.states.right = false
      this.player1.states.hadouken = false
    }
    if (this.player1.life <= 0){
      this.player2.states.left = false
      this.player2.states.right = false
      this.player2.states.hadouken = false
    }
    // if (this.player2.lose) {
    //   clearInterval(intervalID);
    // }
  },
  stop: function() {
       clearInterval(this.interval);
  }
};

let kenStage = new Audio("./audio/ken.mp3");

function playMusic() {
  kenStage.volume = 0.2;
  kenStage.play();
}

function stopMusic() {
  kenStage.pause()
}

function playWin(){
  let win = new Audio("./audio/victory.mp3")
  win.volume = 0.4
  win.play()
}

function playHadouken() {
  let hadouSound = new Audio("./audio/hadouken.mp3");
  hadouSound.volume = 0.4;
  hadouSound.play();
}

function playKikouken() {
  let kikouSound = new Audio("./audio/kikoken.mp3");
  kikouSound.volume = 0.4;
  kikouSound.play();
}

function chunLaugh() {
  let laughSound = new Audio("./audio/chun-laugh.mp3");
  laughSound.volume = 0.4;
  laughSound.play();
}

  function chunYatta() {
    let yattaSound = new Audio("./audio/chun-yatta.mp3");
    yattaSound.volume = 0.4;
    yattaSound.play();
  }

function playHit() {
  let hitSound = new Audio("./audio/hit.mp3");
  hitSound.volume = 0.4;
  hitSound.play();
}

// function sound(src) {
//     this.sound = document.createElement("audio");
//     this.sound.src = src;
//     this.sound.setAttribute("preload", "auto");
//     this.sound.setAttribute("controls", "none");
//     this.sound.style.display = "none";
//     document.body.appendChild(this.sound);
//     this.play = function(){
//       this.sound.play();
//     }
//     this.stop = function(){
//       this.sound.pause();
//     }
//   }
