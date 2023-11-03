enemies('canvas1',0,100,'enemy1.png',293,155);
enemies('canvas2',1,100,'enemy2.png',266,188);
enemies('canvas3',2,100,'enemy3.png',218,177);
enemies('canvas4',3,100,'enemy4.png',212,213);



function enemies (canva,selectedCanva,enemies,src,spriteWidth,spriteHeight){

const canvas = document.getElementById(canva);
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;

const numberOfEnemies = enemies;//var del nr di nemici

const enemiesArray = []; //array dove storo tutti i nemici

const gameBackgrounds = [];



let gameFrame = 0;


// const enemyImage2 = new Image();
// enemyImage2.src = 'enemy2.png';
// const enemyImage3 = new Image();
// enemyImage3.src = 'enemy3.png';
// const enemyImage4 = new Image();
// enemyImage4.src = 'enemy4.png'; 
// const backgroundLayer4 = new Image();
// backgroundLayer4.src = 'l4.png';

class Enemy {
    constructor(){
        this.image = new Image();
        this.image.src = src;
        // this.speed = Math.random() * 4 - 2;
        this.spriteWidth = spriteWidth; //
        this.spriteHeight = spriteHeight;//
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = 0;//Math.random() * 4 * Math.PI;
        this.angleSpeed = Math.random() * 2+0.5;
        this.curve = Math.random() * 2+5;

    }
    update(){
        this.x += Math.random()*5 -2.5;
        this.y += Math.random()*5 -2.5;
        if (gameFrame % this.flapSpeed === 0){
        this.frame > 4 ? this.frame = 0 : this.frame++;
        }
}   
    update2(){
        this.x -= this.speed; 
        this.y += this.curve * Math.sin(this.angle) ;
        this.angle += this.angleSpeed;
        if (this.x + this.width < 0) this.x = canvas.width;
        
        if (gameFrame % this.flapSpeed === 0){
        this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    update3(){
        // this.x = Math.cos(this.angle) * this.curve + this.x; 
        // this.y += this.curve *Math.cos(this.angle ) ;
        this.x = canvas.width/3 * Math.cos(this.angle * Math.PI/180) + (canvas.width / 2 - this.width / 2);
        this.y = canvas.height/3 * Math.sin(this.angle * Math.PI/270) + (canvas.height / 2 - this.height / 2);
        this.angle += this.angleSpeed;
        if (this.x + this.width < 0) this.x = canvas.width;
        
        if (gameFrame % this.flapSpeed === 0){
        this.frame > 4 ? this.frame = 0 : this.frame++;
        }
}

    draw(){
       ctx.drawImage(this.image,this.frame * this.spriteWidth,0,this.spriteWidth, this.spriteHeight,this.x,this.y, this.width, this.height); 
    }
}


for (let i = 0; i < numberOfEnemies; i++){
    enemiesArray.push(new Enemy());
}

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx1.drawImage(backgroundLayer4,0,0,CANVAS1_WIDTH, CANVAS1_HEIGHT);
    enemiesArray.forEach(enemy => {
      if (selectedCanva === 0) {
        enemy.update();
      } else if (selectedCanva === 1) {
        enemy.update2();
      } else if (selectedCanva === 2) {
        enemy.update3();
      } else if (selectedCanva === 3) {
        enemy.update3();
      }
      enemy.draw();
    });
    gameFrame++;
    requestAnimationFrame(animate);
  }
  
  animate();
}