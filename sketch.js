var object;
var score=0;
var objectGroup;
var box;
var bullet,bulletsGroup;
var ground;




function setup() {
  createCanvas(400, 400);
  objectGroup=new Group;
  box=createSprite(200,380,50,50);
  bulletsGroup=new Group;
  ground=createSprite(200,400,400,20);
 
}

function draw() {
  background("black");
  if(keyDown("RIGHT_ARROW")){
    box.x=box.x+10;
  }
  if(keyDown("LEFT_ARROW")){
    box.x=box.x-10;
  }
  


if(frameCount%60===0){
  object=createSprite(random(10,390),0,random(70,10),random(70,10));
  object.velocityY=random(3,5);
  object.shapeColor=(random("red","green"));
  objectGroup.add(object);

}

if(keyWentDown("SPACE")){
  bullet=createSprite(box.x,box.y,5,20);
  bullet.velocityY=-6;
  bullet.shapeColor=("red");
  bulletsGroup.add(bullet);
}
if(bulletsGroup.isTouching(object)){
  score=score+1;
  object.destroy();
  
}
if(objectGroup.isTouching(ground)){
  score=score-1;
  object.destroy();
}

box.shapeColor=("blue");



  drawSprites();
  textSize(20);
  textFont("Georgia");
  textStyle(BOLD);
  
  fill("white");
  
  text("score:"+score,280,100);
  
}