const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');

const CANVAS2_WIDTH = canvas2.width = 500;
const CANVAS2_HEIGHT = canvas2.height = 1000;

const numberOfEnemies2 = 50;//var del nr di nemici

const enemiesArray2 = []; //array dove storo tutti i nemici

const gameBackgrounds2 = [];

let gameFrame2 = 0;


// const enemyImage1 = new Image();
// enemyImage1.src = 'enemy1.png';
// const enemyImage3 = new Image();
// enemyImage3.src = 'enemy3.png';
// const enemyImage4 = new Image();
// enemyImage4.src = 'enemy4.png'; 
// const backgroundLayer4 = new Image();
// backgroundLayer4.src = 'l4.png';

class Enemy2 {
    constructor(){
        this.image = new Image();
        this.image.src = 'enemy2.png';
        this.speed = Math.random() * 4 - 1;
        this.spriteWidth = 266;
        this.spriteHeight = 188;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas2.width - this.width);
        this.y = Math.random() * (canvas2.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = Math.random() * 2 * Math.PI;
        this.angleSpeed = Math.random() * 0.3;
        this.curve = Math.random() * 7;
        

    }
    update(){
        this.x -= this.speed; 
        this.y += this.curve *Math.sin(this.angle) ;
        this.angle += this.angleSpeed;
        if (this.x + this.width < 0) this.x = canvas2.width;
        
        if (gameFrame2 % this.flapSpeed === 0){
        this.frame > 4 ? this.frame = 0 : this.frame++;
        }
}
    draw(){
       ctx2.drawImage(this.image,this.frame * this.spriteWidth,0,this.spriteWidth, this.spriteHeight,this.x,this.y, this.width, this.height); 
    }
}


for (let i = 0; i < numberOfEnemies2; i++){
    enemiesArray2.push(new Enemy2());
}

function animate(){
    ctx2.clearRect(0,0,CANVAS2_WIDTH, CANVAS2_HEIGHT);
    // ctx2.drawImage(backgroundLayer4,0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    enemiesArray2.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    gameFrame2++;
    requestAnimationFrame(animate);
}

animate();