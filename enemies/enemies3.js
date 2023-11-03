const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');

const CANVAS3_WIDTH = canvas3.width = 500;
const CANVAS3_HEIGHT = canvas3.height = 1000;

const numberOfEnemies3 = 100;//var del nr di nemici

const enemiesArray3 = []; //array dove storo tutti i nemici

const gameBackgrounds3 = [];

let gameFrame3 = 0;


// const enemyImage1 = new Image();
// enemyImage1.src = 'enemy1.png';
// const enemyImage2 = new Image();
// enemyImage2.src = 'enemy2.png';
// const enemyImage4 = new Image();
// enemyImage4.src = 'enemy4.png'; 
// const backgroundLayer4 = new Image();
// backgroundLayer4.src = 'l4.png';

class Enemy3 {
    constructor(){
        this.image = new Image();
        this.image.src = 'enemy3.png';
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 218;
        this.spriteHeight = 177;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas3.width - this.width);
        this.y = Math.random() * (canvas3.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = 0;//Math.random() * 4 * Math.PI;
        this.angleSpeed = Math.random() * 2+0.5;
        this.curve = Math.random() * 200+50;
        

    }
    update(){
        // this.x = Math.cos(this.angle) * this.curve + this.x; 
        // this.y += this.curve *Math.cos(this.angle ) ;
        this.x = canvas3.width/3 * Math.cos(this.angle * Math.PI/180) + (canvas3.width / 2 - this.width / 2);
        this.y = canvas3.height/3 * Math.sin(this.angle * Math.PI/270) + (canvas3.height / 2 - this.height / 2);
        this.angle += this.angleSpeed;
        if (this.x + this.width < 0) this.x = canvas3.width;
        
        if (gameFrame3 % this.flapSpeed === 0){
        this.frame > 4 ? this.frame = 0 : this.frame++;
        }
}
    draw(){
       ctx3.drawImage(this.image,this.frame * this.spriteWidth,0,this.spriteWidth, this.spriteHeight,this.x,this.y, this.width, this.height); 
    }
}


for (let i = 0; i < numberOfEnemies3; i++){
    enemiesArray3.push(new Enemy3());
}

function animate(){
    ctx3.clearRect(0,0,CANVAS3_WIDTH, CANVAS3_HEIGHT);
    // ctx3.drawImage(backgroundLayer4,0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    enemiesArray3.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    gameFrame3++;
    requestAnimationFrame(animate);
}

animate();