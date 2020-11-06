var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage , bananaGroup ; 
var FoodGroup, obstacleGroup
var survivalTime = 0

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(400, 400)

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1

  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  

}

function draw() {
  background("white")

  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(frameCount);
  
  if(keyWentDown("space")){
    
    monkey.velocityY=-13
    
    
  }
  monkey.velocityY=monkey.velocityY + 0.8
  
  monkey.collide(ground)

  FoodGroup();
  obstacle();
  
  drawSprites();
  stroke("black")
  textSize("20")
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SURVIVAL TIME: " + survivalTime , 100 , 50 )

}

function FoodGroup(){
  
  if(frameCount % 80 === 0){
    
    var banana = createSprite(400 , 200 ,30 ,30)
    banana.y = Math.round(random(120 , 200))
    banana.velocityX = -6
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.lifetime = 70
    bananaGroup.add(banana)
    
    
  }
  
  
}


function obstacle(){
  
  if(frameCount % 300 === 0){
    
    var stone = createSprite(400 , 310 ,30 ,30)
    stone.velocityX = -6
    stone.addImage(obstacleImage)
    stone.scale=0.2
    stone.lifetime = 80
    obstacleGroup.add(stone)
  
  
  
}
}