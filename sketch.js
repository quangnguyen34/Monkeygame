
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
  monkey=createSprite(80 , 315 , 20 , 20)
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400 , 350 , 900 , 10);
  ground.velocityX=-4
  ground.x=ground.width/2;
  console.log(ground.x);
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background("green")
 ground.shapeColor="brown"
  drawSprites();
  spawnfood();
  spawnobstacle();
  switch(score){
    case 10: monkey.scale=0.12;
      break;
    case 20: monkey.scale=0.14;
      break;
    case 30: monkey.scale=0.16;
      break;
    case 40: monkey.scale=0.18;
      break;
    default: break;
  }
  monkey.collide(ground);
    if (ground.x < 0){
      ground.x = ground.width/2;
}
   //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
  
  //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  if(FoodGroup.isTouching(monkey)){
        monkey.velocityY = 0
    score=score+2
        // gameState = END;
  }
  if(obstacleGroup.isTouching(monkey)){
        monkey.velocityX = 0
        obstacleGroup.setVelocityXEach(0);
      FoodGroup.setVelocityXEach(0);
        // gameState = END;
  }     
      
      
}
 function spawnfood(){
  //write code here to spawn the food
  if (frameCount % 60 === 0) {
     food = createSprite(600,400,40,10);
     food.y = Math.round(random(100,200));
     food.addImage(bananaImage );
     food.scale = 0.1;
     food.velocityX = -3;
    
     //assign lifetime to the variable
    food.lifetime = 200;
    FoodGroup.add(food)

  }
 }
   function spawnobstacle() {
  //write code here to spawn the obstacles
  if (frameCount % 60 === 0) {
     obstacle = createSprite(600,327,40,10);
     //obstacle.y = Math.round(random(250,300));
     obstacle.addImage( obstaceImage);
     obstacle.scale = 0.1;
     obstacle.velocityX = -3;
     obstacleGroup.add(obstacle)
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
   
 }
   }