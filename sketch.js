var ast
var background
var bath
var brush
var drink
var eat 
var gym 
var move
var sleep

function preload(){
  background = loadImage("iss.png")
  bath = loadImage("bath2.png")
  brush = loadImage("brush.png")
  drink = loadImage("drink2.png")
  eat = loadImage("eat1.png")
  gym = loadImage("gym11.png")
  move = loadImage("move.png")
  sleep = loadImage("sleep.png")

}


function setup() {
  createCanvas(800,400);

  
  astronaut = createSprite(300,230)
  astronaut.addAnimation("exercising", gym)
  astronaut.scale = 0.2
}

function draw() {
  background(background)  

  textSize(20)
  fill("white")
  text("Instructions:",20, 35)
  textSize(15)
  text("Up Arrow = Eating",20, 55);
  text("Down Arrow = Sleeping",20, 70)
  text("Left Arrow = Brushing",20, 85)
  text("Right Arrow = Bathing",20, 100)
  text("m key = Moving",20, 115)

  edges=createEdgeSprites()
  astronaut.bounceOff(edges)

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("eating", eat)
    astronaut.changeAnimation("eating")
    astronaut.y = 350;
    astronaut.velocityX = 0
    astronaut.velocityY = 0
    }

    if(keyDown("DOWN_ARROW")){
      astronaut.addAnimation("sleeping", sleep);
      astronaut.changeAnimation("sleeping");
      astronaut.y = 350;
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
    }

    if(keyDown("LEFT_ARROW")){
      astronaut.addAnimation("brushing", brush);
      astronaut.changeAnimation("brushing");
      astronaut.x = 150;
      astronaut.y = 350;
      astronaut.velocityX = 0.5;
      astronaut.velocityY = 0.5;
    }

    if(keyDown("RIGHT_ARROW")){
      astronaut.addAnimation("bathing", bath);
      astronaut.changeAnimation("bathing");
      astronaut.x = 300;
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
    }
  
    if(keyDown("m")){
      astronaut.addAnimation("moving", move);
      astronaut.changeAnimation("moving");
      astronaut.velocityX = 1;
      astronaut.velocityY = 1;
    }









  drawSprites();
}