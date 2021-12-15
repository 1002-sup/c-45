let ground;
let lander;
var lander_img,bg_img,gameOver_img;
var Platform, base,land, gameOver;


var vx = 0;
var g = 0.08;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  Platform = loadImage("platforam.jpg");
  gameOver_img = loadImage("1306995.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  base = createSprite(400,650,50,50);
  base.addImage(Platform);
  base.visible = false;
  
  land = createSprite(500,500,200,30);
  land.shapeColor = "white";

  gameOver = createSprite(500,400,50,50);
  gameOver.addImage(gameOver_img);
  gameOver.scale = 0.3;
  gameOver.visible = false;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  //text("Vertical Velocity: "+round(vy),800,75);
  pop();


  

  if(keyDown(UP_ARROW))
  {
    lander.velocityY = -2;
  }

  if(keyDown(RIGHT_ARROW))
  {
    lander.velocityX = 2;
  }

  if(keyDown(LEFT_ARROW))
  {
    lander.velocityX = -2;
  }
  if(keyDown(DOWN_ARROW))
  {
    lander.velocityY = 2;
  }

  if(lander.isTouching(base))
  {
    lander.position.y = 0;
  }

  if(lander.isTouching(land))
  {
    lander.position.y = 0;
    lander.position.x = 0;
    lander.visible = false;
    land.visible = false;
    gameOver.visible = true
  }

  drawSprites();
}


