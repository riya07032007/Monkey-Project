
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,600)
 
  monkey=createSprite(80,550,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(600,585,1200,10)
  ground.velocityX=-4
  ground.x=ground.width/2
 

 survivalTime=0;
}


function draw() {
background("pink")
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time :"+survivalTime,200,50)
  if(ground.x<0){
     ground.x=ground.width/2
     }
  
  if(keyDown("space")&&monkey.y>=500){
     monkey.velocityY=-18
     }
  
  monkey.velocityY=monkey.velocityY+0.5
  
  monkey.collide(ground)
 drawSprites() 
  food1();
  obstacle();
}

function food1(){
  if(World.frameCount%80===0){
    food=createSprite(650,200,20,20);
    food.scale=0.2;
    r=Math.round(random(200,120));
    food.addImage(bananaImage)
    food.y=Math.round(random(50,340));
    food.velocityX=-7
    food.scale=0.1
    food.lifetime=200
  }
}

function obstacle(){
   if (frameCount % 300 === 0){
   var obstacle1 = createSprite(600,550,10,40);
   obstacle1.velocityX = -7
   obsacle1 = Math.round(random(1,6));
     obstacle1.addImage(obstaceImage)
     obstacle1.scale=0.2
  }
}
  
    
   






