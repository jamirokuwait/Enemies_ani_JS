const canvas1 = document.getElementById('canvas4');
const ctx1 = canvas1.getContext('2d');

const CANVAS1_WIDTH = canvas1.width = 500;
const CANVAS1_HEIGHT = canvas1.height = 1000;

const numberOfEnemies1 = 50;//var del nr di nemici

const enemiesArray1 = []; //array dove storo tutti i nemici

const gameBackgrounds1 = [];

let gameFrame1 = 0;


// const enemyImage2 = new Image();
// enemyImage2.src = 'enemy2.png';
// const enemyImage3 = new Image();
// enemyImage3.src = 'enemy3.png';
// const enemyImage4 = new Image();
// enemyImage4.src = 'enemy4.png'; 
// const backgroundLayer4 = new Image();
// backgroundLayer4.src = 'l4.png';

class Enemy1 {
    constructor(){
        this.image = new Image();
        this.image.src = 'enemy1.png';
        // this.speed = Math.random() * 4 - 2;
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas1.width - this.width);
        this.y = Math.random() * (canvas1.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);

    }
    update(){
        this.x += Math.random()*5 -2.5;
        this.y += Math.random()*5 -2.5;
        if (gameFrame1 % this.flapSpeed === 0){
        this.frame > 4 ? this.frame = 0 : this.frame++;
        }
}
    draw(){
       ctx1.drawImage(this.image,this.frame * this.spriteWidth,0,this.spriteWidth, this.spriteHeight,this.x,this.y, this.width, this.height); 
    }
}


for (let i = 0; i < numberOfEnemies1; i++){
    enemiesArray1.push(new Enemy1());
}

function animate(){
    ctx1.clearRect(0,0,CANVAS1_WIDTH, CANVAS1_HEIGHT);
    // ctx1.drawImage(backgroundLayer4,0,0,CANVAS1_WIDTH, CANVAS1_HEIGHT);
    enemiesArray1.forEach(enemy => {
        
        enemy.update();
        enemy.draw();
    });
    gameFrame1++;
    requestAnimationFrame(animate);
}

animate();